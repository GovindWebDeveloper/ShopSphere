import { useEffect, useState } from "react";
import FilterComponent from "../../../component/Filter";
import ProductCard from "../../../component/Card";
import { getProducts } from "../../../services/getServices";

const CACHE_KEY = "productlists";
const CACHE_EXPIRATION = 60 * 60 * 1000;

const ProductLists = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 1000],
  });

  //check cached and fetch products

  const fetchProducts = async () => {
    setLoading(true);

    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);

      // Check if cache is still valid
      if (Date.now() - timestamp < CACHE_EXPIRATION) {
        console.log("Loading products from cache");
        setProducts(data);
        setLoading(false);
        return;
      } else {
        console.log("Cache expired, fetching new data");
      }
    }

    // Fetch from API if no valid cache
    try {
      const data = await getProducts();
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ data, timestamp: Date.now() })
      );
      setProducts(data || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = [...new Set(products.map((item) => item.category))];
  const filteredProducts = products.filter((item) => {
    const inCategory =
      filters.category.length === 0 || filters.category.includes(item.category);
    const inPriceRange =
      item.price >= filters.priceRange[0] &&
      item.price <= filters.priceRange[1];
    return inCategory && inPriceRange;
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "start",
        width: "100%",
        background: "#ffffff",
      }}
    >
      <div style={{ width: "15%", padding: "1em" }}>
        <FilterComponent
          categories={categories}
          filters={filters}
          setFilters={setFilters}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          width: "80%",
          padding: "1em",
          position: "relative",
          minHeight: "400px",
        }}
      >
        {loading ? (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "40%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* <Spin size="large" /> */}
          </div>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))
        ) : (
          <p style={{ fontSize: "1.2em", color: "#555", margin: "auto" }}>
            No Products Found
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductLists;
