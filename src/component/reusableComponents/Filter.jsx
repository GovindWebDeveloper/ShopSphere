import { Checkbox, Slider } from "antd";

const FilterComponent = ({ categories, filters, setFilters }) => {
  // Ensure filters have default values
  const defaultFilters = {
    category: [],
    priceRange: [10, 300],
    ...filters,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        padding: "2em 1em",
        background: "#ffffff",
        height: "100vh",
        borderRadius:"10px"
      }}
    >
      <h2 style={{ fontSize: "1.6em" }}>Filter Products</h2>

      {/* Category Filter */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          borderRadius: "10px",
          maxHeight:"100vh"
        }}
      >
        <h3 style={{ fontSize: "1.5em", marginTop: "1em" }}>Category</h3>
        {categories.map((category) => (
          <Checkbox
            key={category}
            checked={defaultFilters.category.includes(category)}
            onChange={() =>
              setFilters((prev) => ({
                ...prev,
                category: prev.category.includes(category)
                  ? prev.category.filter((c) => c !== category)
                  : [...prev.category, category],
              }))
            }
          >
            {category}
          </Checkbox>
        ))}
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 style={{ fontSize: "1.5em", marginTop: "1em" }}>Price Range</h3>
        <Slider
          range
          min={10}
          max={300}
          value={defaultFilters.priceRange}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, priceRange: value }))
          }
        />
        <p>
          Price: ${defaultFilters.priceRange[0]} - $
          {defaultFilters.priceRange[1]}
        </p>
      </div>
    </div>
  );
};

export default FilterComponent;
