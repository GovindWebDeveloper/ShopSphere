import { Card, Spin } from "antd";
import { useEffect, useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Cancel = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        margin: "100px auto",
        flexDirection: "column",
      }}
    >
      <div style={{ marginBottom: "2em" }}>
        <Spin size="large" />
      </div>
      <div style={{ width: "40%", margin: "auto" }}>
        <Card>
          <CgCloseO style={{ fontSize: "40px", color: "red" }} />
          <h1 style={{ color: "red" }}>Payment Failed 😢</h1>
          <h2>Try Again</h2>
          <p>
            <a onClick={() => navigate("/final")} style={{ cursor: "pointer" }}>
              Click here..
            </a>{" "}
            or You will automatically be redirected to the payment section in{" "}
            <strong>{countdown}</strong> seconds.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Cancel;
