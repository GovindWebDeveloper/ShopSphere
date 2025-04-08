import { useState } from "react";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const SliderComponent = ({
  title,
  items = [],
  visibleCards = 5,
  cardWidth = 240, // Default card width
  containerStyle = {},
  titleStyle = {},
  cardStyle = {},
  prevButton = (
    <Button>
      <LeftOutlined />
    </Button>
  ),
  nextButton = (
    <Button>
      <RightOutlined />
    </Button>
  ),
  children,
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex < items.length - visibleCards) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "2em",
        ...containerStyle,
      }}
    >
      <section style={{ width: "100%" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
            margin: "auto",
          }}
        >
          <h1 style={{ fontSize: "2em", marginBottom: "1em", ...titleStyle }}>
            {title}
          </h1>
          <div>
            <span
              onClick={startIndex === 0 ? null : handlePrevious}
              style={{
                cursor: startIndex === 0 ? "not-allowed" : "pointer",
                opacity: startIndex === 0 ? 0.5 : 1,
              }}
            >
              {prevButton}
            </span>
            <span
              onClick={
                startIndex >= items.length - visibleCards ? null : handleNext
              }
              style={{
                cursor:
                  startIndex >= items.length - visibleCards
                    ? "not-allowed"
                    : "pointer",
                opacity: startIndex >= items.length - visibleCards ? 0.5 : 1,
              }}
            >
              {nextButton}
            </span>
          </div>
        </header>

        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "unset",
            gap: "10px",
            overflow: "hidden",
            width: "90%",
            margin: "auto",
            ...cardStyle,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              gap: "10px",
              transform: `translateX(-${startIndex * (cardWidth + 10)}px)`, // Adjust transform based on card width and gap
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {children}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SliderComponent;