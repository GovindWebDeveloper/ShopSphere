import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../../redux/cart/cartSlice";
import { Button, Card, Empty, message } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../component/reusableComponents/CustomButton";

const MyCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Handle quantity change
  const handleQuantityChange = (id, delta) => {
    const item = cartItems.find((item) => item.id === id);
    const newQuantity = item.quantity + delta;
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    } else {
      dispatch(removeFromCart(id));
      message.error("Product removed from cart");
    }
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "2em" }}>
        <Empty
          description={
            <>
              <h2>Your Cart is empty </h2>
              <p>Start adding products you love!</p>
            </>
          }
        />
        <CustomButton
          text={"Browse Products"}
          style={{ marginTop: "1em", padding: "10px 20px" }}
          onClick={() => navigate("/")}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "2em",
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div style={{ width: "100%" }}>
        <div>
          {cartItems.map((item) => (
            <Card key={item.id} style={{ width: "100%", marginBottom: "1em" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1em",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={160}
                  height={160}
                />
                <div style={{ width: "70%", paddingLeft: "1em" }}>
                  <h2>{item.title}</h2>
                  <h3>${item.price}</h3>
                  <p style={{ color: "green", fontSize: "1.2em" }}>In stock</p>
                  <p style={{ color: "grey", fontSize: "1.2em" }}>
                    Eligible for FREE shipping
                  </p>
                  <p>
                    <b>Category:</b> {item.category}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Button onClick={() => handleQuantityChange(item.id, -1)}>
                      -
                    </Button>
                    <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                      {item.quantity}
                    </span>
                    <Button onClick={() => handleQuantityChange(item.id, 1)}>
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
