import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorite } from "../../../redux/favorite/favSlice";
import { Button, Card, Divider, Empty, message } from "antd";
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline, MdOutlineAddShoppingCart } from "react-icons/md";
import { addToCart } from "../../../redux/cart/cartSlice";

import { useEffect } from "react";
import CustomButton from "../../../component/reusableComponents/CustomButton";

const MyFavorite = () => {
  const favItems = useSelector((state) => state.fav.favItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleRemove = (id) => {
    dispatch(removeFromFavorite(id));
    message.success("Product deleted from Favorite");
  };

  if (favItems.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "2em" }}>
        <Empty
          description={
            <>
              <h2>Your favorite list is empty </h2>
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

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    console.log("Item Data", item);
    message.success("Product added to the cart");
    dispatch(removeFromFavorite(item.id));
  };

  return (
    <div style={{ width: "100%", padding: "2em" }}>
      <h2 style={{ padding: "1em" }}>Favorite Items</h2>
      <Divider />
      {favItems.map((item) => (
        <Card key={item.id} style={{ width: "50%", margin: "0 auto 1em" }}>
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
              onClick={() => navigate(`/product/${item.id}`)}
              style={{ cursor: "pointer" }}
            />
            <div style={{ width: "70%", paddingLeft: "1em" }}>
              <h2
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                {item.title}
              </h2>
              <h3>${item.price}</h3>
              <p style={{ color: "green", fontSize: "1.2em" }}>In stock</p>
              <p style={{ color: "grey", fontSize: "1.2em" }}>
                Eligible for FREE shipping
              </p>
              <p>
                <b>Category:</b> {item.category}
              </p>
              <div
                style={{ display: "flex", justifyContent: "start", gap: "1em" }}
              >
                <Button
                  icon={
                    <MdDeleteOutline
                      style={{ color: "red", fontSize: "1.5em" }}
                    />
                  }
                  onClick={() => handleRemove(item.id)}
                ></Button>
                <Button
                  onClick={() => handleAddToCart(item, item.id)}
                  icon={
                    <MdOutlineAddShoppingCart
                      style={{ color: "black", fontSize: "1.5em" }}
                    />
                  }
                ></Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MyFavorite;
