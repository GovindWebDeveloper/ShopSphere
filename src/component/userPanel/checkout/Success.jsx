import { Card, Spin } from "antd";
import { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
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
        width: "100%",
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
          <FaCircleCheck style={{ fontSize: "40px", color: "green" }} />
          <h1 style={{ color: "green" }}>Payment Success 😊</h1>
          <h2>Thank you for Purchase </h2>
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
