import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import type { CartItem } from "@/lib/types";

const currency = "aud";

function getBaseUrl(request: NextRequest) {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    request.headers.get("origin") ||
    "http://localhost:3000"
  );
}

function toLineItems(items: CartItem[]) {
  return items.map((item) => {
    if (typeof item.priceCents !== "number") {
      throw new Error(`Missing price for ${item.name}`);
    }
    const productData: Stripe.Checkout.SessionCreateParams.LineItem.PriceData.ProductData = {
      name: item.name,
    };
    if (item.image && item.image.startsWith("http")) {
      productData.images = [item.image];
    }

    return {
      price_data: {
        currency,
        unit_amount: item.priceCents,
        product_data: productData,
      },
      quantity: item.quantity,
    };
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const items = body.items as CartItem[] | undefined;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    const baseUrl = getBaseUrl(request);
    const lineItems = toLineItems(items);
    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      metadata: {
        source: "lalalab-checkout",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to create checkout";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}