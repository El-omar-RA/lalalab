import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import type Stripe from "stripe";

// Handle different Stripe event types
async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  console.log("Checkout session completed:", session.id);
  
  // You can add order processing here:
  // - Save order to database
  // - Send confirmation email
  // - Update inventory
  // - Trigger fulfillment
  
  return {
    status: "processed",
    sessionId: session.id,
    customerId: session.customer,
    amount: session.amount_total,
  };
}

async function handlePaymentIntentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  console.log("Payment intent succeeded:", paymentIntent.id);
  
  return {
    status: "succeeded",
    paymentIntentId: paymentIntent.id,
    amount: paymentIntent.amount,
  };
}

async function handlePaymentIntentFailed(paymentIntent: Stripe.PaymentIntent) {
  console.error("Payment intent failed:", paymentIntent.id);
  
  return {
    status: "failed",
    paymentIntentId: paymentIntent.id,
    reason: paymentIntent.last_payment_error?.message,
  };
}

export async function POST(request: NextRequest) {
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  const payload = await request.text();

  try {
    const stripe = getStripe();
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      webhookSecret
    );

    let result;

    // Handle specific event types
    switch (event.type) {
      case "checkout.session.completed":
        result = await handleCheckoutSessionCompleted(
          event.data.object as Stripe.Checkout.Session
        );
        break;

      case "payment_intent.succeeded":
        result = await handlePaymentIntentSucceeded(
          event.data.object as Stripe.PaymentIntent
        );
        break;

      case "payment_intent.payment_failed":
        result = await handlePaymentIntentFailed(
          event.data.object as Stripe.PaymentIntent
        );
        break;

      default:
        result = { type: event.type, status: "unhandled" };
    }

    return NextResponse.json({ received: true, result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Webhook error";
    console.error("Webhook error:", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }
}