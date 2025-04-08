import { useEffect, useState } from "react";
import { Spin } from "antd";
import { loaderSubject } from "../../services/LoaderService";

const FullScreenLoader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const subscription = loaderSubject.subscribe((isLoading) => {
      setLoading(isLoading);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default FullScreenLoader;
