import { useCallback, useEffect, useState } from "react";
import ProductCard from "../../component/reusableComponents/Card";
import { getProducts } from "../../services/getServices";

const cache = {};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    setLoading(true);

    if (cache["ourProducts"]) {
      console.log("Returning cached data for 'ourProducts'");
      setProducts(cache["ourProducts"]);
      setLoading(false);
    } else {
      console.log("Fetching new data for 'ourProducts'");
      try {
        const data = await getProducts();
        cache["ourProducts"] = data;
        setProducts(data || []);
      } catch (error) {
        console.log("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div
      style={{
        width: "100%",
        padding: "2em",
        background: "#ffffff",
      }}
    >
      <h1 style={{ marginLeft: "3em" }}>Our Products</h1>
      {loading ? (
        <p style={{ alignItems: "center" }}>Loading Products...</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            width: "90%",
            padding: "1em",
            margin: "auto",
          }}
        >
          {products.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              imageStyle={{ borderRadius: "0px" }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
