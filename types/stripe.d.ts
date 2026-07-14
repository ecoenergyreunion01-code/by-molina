declare module '@stripe/stripe-js' {
  export interface Stripe {
    redirectToCheckout(sessionId: string): Promise<{ error: { message: string } }>
  }
  export function loadStripe(publishableKey: string): Promise<Stripe | null>
}
