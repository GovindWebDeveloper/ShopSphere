import { Card, Button, message, Tooltip } from "antd";
import { MdFavorite, MdOutlineAddShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  updateQuantity,
  removeFromCart,
} from "../../redux/cart/cartSlice";
import { toggleFavorite } from "../../redux/favorite/favSlice";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favItems = useSelector((state) => state.fav.favItems);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
  const isFavorite = favItems.some((favItem) => favItem.id === item.id);

  const handleAddToCart = () => {
    const isAuthenticated = localStorage.getItem("loggedInUser");
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      dispatch(addToCart(item));
      message.success("Product added to the cart");
    }
  };

  const handleQuantityChange = (id, delta) => {
    const newQuantity = (cartItem?.quantity || 0) + delta;
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    } else {
      dispatch(removeFromCart(id));
      message.error("Product removed from cart");
    }
  };

  const handleAddToFav = () => {
    const isAuthenticated = localStorage.getItem("loggedInUser");
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      dispatch(toggleFavorite(item));
      if (!isFavorite) {
        message.success("Product added to the Favorite");
      } else {
        message.error("Product deleted from the Favorite");
      }
    }
  };
  return (
    <Card
      hoverable
      style={{
        width: "240px",
        textAlign: "center",
        backgroundColor: "white",
        marginBottom: "10px",
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "160px", height: "160px" }}
        onClick={() => navigate(`/product/${item.id}`)}
      />
      <Tooltip title={item.title}>
        <h3
          onClick={() => navigate(`/product/${item.id}`)}
          style={{
            fontSize: "20px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
            margin: "0 auto",
          }}
        >
          {item.title}
        </h3>
      </Tooltip>
      <h3>${item.price}/-</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5em",
        }}
      >
        {cartItem ? (
          <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
            <Button onClick={() => handleQuantityChange(item.id, -1)}>-</Button>
            <span>{cartItem.quantity}</span>
            <Button onClick={() => handleQuantityChange(item.id, 1)}>+</Button>
          </div>
        ) : (
          <Button
            style={{ fontSize: "1.5em" }}
            onClick={handleAddToCart}
            icon={<MdOutlineAddShoppingCart />}
          ></Button>
        )}
        <Button
          style={{ fontSize: "1.5em" }}
          onClick={handleAddToFav}
          icon={<MdFavorite style={{ color: isFavorite ? "red" : "grey" }} />}
        ></Button>
      </div>
      {/* <div>
        <CustomButton
          text={"Buy Now"}
          style={{
            width: "100%",
            marginTop: "1em",
            backgroundColor: "#ffab45",
            border: "0px",
            color: "white",
            fontWeight: "600",
          }}
          onClick={handleBuyNow}
        />
      </div> */}
    </Card>
  );
};

export default ProductCard;
