import Images from "../../assets/Images/ImageComponent/Images";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${Images.Banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        maxWidth: "100%",
        minHeight: "100vh",
        marginTop: "0",
      }}
    >
      <div
        style={{
          margin: "auto",
          width: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          gap: "20px",
          flexDirection: "column",
          padding: "1em",
        }}
      >
        <img
          src={Images.Logo}
          alt="logoImage"
          width={250}
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <h3
          style={{
            color: "white",
            fontSize: "3em",
            fontFamily: "cursive",
            textAlign: "center",
          }}
        >
          Shop, <br /> Men&apos;s Wear, Women&apos;s Wear <br />& Electronics at
          One place{" "}
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            gap: "2em",
            marginTop: "1.5em",
            flexWrap: "wrap",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "3em", color: "white" }}>14k+</h2>
            <p style={{ fontSize: "1.5em", color: "white" }}>
              PRODUCT VARIETIES
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "3em", color: "white" }}>50k+</h2>
            <p style={{ fontSize: "1.5em", color: "white" }}>HAPPY CUSTOMERS</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "3em", color: "white" }}>10+</h2>
            <p style={{ fontSize: "1.5em", color: "white" }}>STORE LOCATIONS</p>
          </div>
        </div>
        <Button
          onClick={() => navigate("/login")}
          style={{
            fontSize: "1.5em",
            padding: "1.5em",
            border: "none",
            borderRadius: "2em",
            color: "white",
            backgroundColor: "green",
            marginTop: "1.5em",
          }}
        >
          START SHOPPING
        </Button>
        <div
          style={{
            marginTop: "1.4em",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "row",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
