import { useState } from "react";
import { Card, ConfigProvider, Divider, Steps } from "antd";
import MyCart from "../cart/Cart";
import Address from "../order/Address";
import Summary from "../order/Summary";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import CustomButton from "../../reusableComponents/CustomButton";

const steps = [
  {
    title: "Cart",
    content: <MyCart />,
  },
  {
    title: " Delivery Address",
    content: <Address />,
  },
  {
    title: "Order Summary",
    content: <Summary />,
  },
];

const CheckoutFinal = () => {
  const [current, setCurrent] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const selectedAddress = useSelector((state) => state.address.selectedAddress);

  const next = () => {
    setCurrent(current + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const prev = () => {
    setCurrent(current - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/create-checkout-session",
        {
          cartItems,
        }
      );

      const { id } = response.data;

      if (id) {
        const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
        console.log(stripePublicKey);
        if (!stripePublicKey) {
          console.error("Stripe public key is not defined.");
          return;
        }

        const stripe = await loadStripe(stripePublicKey);
        await stripe.redirectToCheckout({ sessionId: id });
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const subtotal = calculateSubtotal();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        background: "#ffffff",
        padding: "2em",
        gap: "3em",
      }}
    >
      <div
        style={{
          width: "70%",
          maxWidth: "1200px",
          background: "#fff",
          padding: "2em",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#ffab45",
            },
          }}
        >
          <Steps
            current={current}
            items={items}
            style={{ marginBottom: "3em", color: "red" }}
          />
        </ConfigProvider>

        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          {steps[current].content}
        </div>
      </div>
      {cartItems.length > 0 && (
        <div style={{ width: "30%" }}>
          <div style={{ minHeight: "400px", width: "90%" }}>
            <Card>
              <h2>Price Details</h2>
              <Divider />
              <p>
                <b>Price ({cartItems.length} items):</b> ${subtotal.toFixed(2)}
              </p>
              <p>
                <b>Discount:</b> $0
              </p>
              <p>
                <b>Delivery Charges:</b> <strike>$40 </strike>
                <span style={{ color: "green" }}>FREE Delivery</span>
              </p>
              <Divider />
              <h2>Total Amount: ${subtotal.toFixed(2)}</h2>
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1em",
                  width: "100%",
                  flexWrap: "wrap",
                }}
              >
                {current === 0 && (
                  <CustomButton
                    text={"Place Order"}
                    onClick={next}
                    style={{ color: "white" }}
                    disabled={cartItems.length === 0}
                  />
                )}

                {current > 0 && (
                  <CustomButton
                    text={"Previous"}
                    style={{ background: "#faaa48", color: "white" }}
                    onClick={prev}
                  />
                )}

                {current > 0 && current < steps.length - 1 && (
                  <CustomButton
                    text={"Continue"}
                    onClick={next}
                    style={{
                      color: "white",
                      background:
                        current === 1 && !selectedAddress
                          ? "#f7bd77"
                          : "#ffab45",
                      cursor:
                        current === 1 && !selectedAddress
                          ? "not-allowed"
                          : "pointer",
                    }}
                    disabled={current === 1 && !selectedAddress}
                  />
                )}

                {current === steps.length - 1 && (
                  <CustomButton
                    text={"Proceed to Payment"}
                    onClick={handleCheckout}
                    style={{ color: "white" }}
                  />
                )}
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutFinal;
