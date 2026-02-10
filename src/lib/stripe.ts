import Stripe from "stripe";

let stripeClient: Stripe | null = null;

export function getStripe() {
  if (stripeClient) return stripeClient;
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  stripeClient = new Stripe(secretKey, {
    // Use the Stripe account's default API version.
  });
  return stripeClient;
}

export async function createOrUpdateCustomer(
  email: string,
  metadata?: Record<string, string>
) {
  const stripe = getStripe();

  // Check if customer exists
  const customers = await stripe.customers.list({ email, limit: 1 });

  if (customers.data.length > 0) {
    // Update existing customer
    return await stripe.customers.update(customers.data[0].id, {
      metadata,
    });
  }

  // Create new customer
  return await stripe.customers.create({
    email,
    metadata,
  });
}

export async function createPaymentIntent(
  amount: number,
  currency: string = "aud",
  metadata?: Record<string, string>
) {
  const stripe = getStripe();

  return await stripe.paymentIntents.create({
    amount: Math.round(amount * 100), // Convert to cents
    currency,
    metadata,
  });
}

export async function getCheckoutSession(sessionId: string) {
  const stripe = getStripe();
  return await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items"],
  });
}
