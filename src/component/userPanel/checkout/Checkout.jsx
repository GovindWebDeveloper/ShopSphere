import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./index.css";
import { useSelector } from "react-redux";

// Loads the stripes library and initialises it with public key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutPage = () => {
  const stripe = useStripe(); // Stripe Hook for stripe instance
  const elements = useElements(); //Stripe Hook for Managing stripe Elements like the card input field
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Form Submission handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents default form submission
    setLoading(true);

    if (!stripe || !elements) {
      console.error("Stripe or Elements not loaded");
      setLoading(false);
      return;
    }

    // Create checkout session
    try {
      const response = await fetch(
        "http://localhost:5000/api/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cartItems }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const { id } = await response.json();
      const { error } = await stripe.redirectToCheckout({ sessionId: id });

      // Error Handling
      if (error) {
        console.error(error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="checkout-container">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit" disabled={!stripe || loading}>
            {loading ? "Processing" : "Pay Now"}
          </button>
        </form>
      </div>
    </Elements>
  );
};

export default CheckoutPage;
