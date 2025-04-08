import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../../services/getServices";
import ProductCard from "../../../component/Card";
import { Divider, Rate, Button, message } from "antd";
import { IoLocation } from "../../../assets/Icon/Icon";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      const productsData = await getProducts();
      setProducts(productsData);

      const selectedProduct = productsData.find((p) => p.id === Number(id));
      setProduct(selectedProduct || null);
    }

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const isAuthenticated = localStorage.getItem("loggedInUser");
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      dispatch(addToCart(product));
      message.success("Product added to the cart");
    }
  };

  const handleBuyNow = () => {
    const isAuthenticated = localStorage.getItem("loggedInUser");
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate("/checkout");
    }
  };

  const similarProducts = product
    ? products.filter(
        (item) => item.category === product.category && item.id !== product.id
      )
    : [];

  if (!product) return <p>Loading product details...</p>;

  return (
    <div style={{ padding: "2em", background: "#ffffff" }}>
      {/* Product Details */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "start",
          gap: "1em",
          background: "#ffffff",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "400px",
            height: "400px",
            border: "4mm ridge #32a1ce ",
            borderRadius: "10px",
          }}
        />
        <div style={{ width: "400px", height: "500px" }}>
          <h1
            style={{
              display: "-webkit-box",
              whiteSpace: "normal",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {product.title}
          </h1>
          <div>
            <p style={{ fontSize: "1.3em" }}>
              {product.rating.rate}
              <Rate value={product.rating.rate} disabled />
            </p>
          </div>
          <Divider />
          <p
            style={{
              fontSize: "1.4em",
              display: "-webkit-box",
              whiteSpace: "normal",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 5,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {product.description}
          </p>
          <Divider />

          <h3 style={{ fontSize: "1.7em" }}>Price: ${product.price}/-</h3>

          <h4 style={{ fontSize: "1.4em" }}>Category: {product.category}</h4>
        </div>
        <div
          style={{
            width: "300px",
            backgroundColor: "#ffffff",
            padding: "10px",
            border: "1px solid #d1cfcf",
            borderRadius: "5px",
          }}
        >
          <h1>${product.price}/-</h1>
          <p style={{ fontSize: "1.2em", fontFamily: "sans-sarif" }}>
            FREE Delivery by Tomorrow <a href="/">Order Now </a>
          </p>
          <p>
            <IoLocation /> C3, 23, Alaka Abasan, NewTown Kolkata-700160
          </p>
          <br />
          <h1>In STOCK</h1>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1em",
              gap: "1em",
            }}
          >
            <Button
              style={{
                width: "100%",
                backgroundColor: "yellow",
                border: "0px",
              }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button
              style={{
                width: "100%",
                backgroundColor: "orange",
                border: "0px",
              }}
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div style={{ marginTop: "2em" }}>
        <h2 style={{ margin: "1em 1em" }}>Similar Products</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            width: "90%",
            margin: "auto",
            justifyContent: "start",
          }}
        >
          {similarProducts.length > 0 ? (
            similarProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))
          ) : (
            <p>No similar products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
