import { Spin } from "antd";

const SuspenseLoader = () => {
  return (
    <div>
      <Spin size="large" style={{ display: "block", margin: "20px auto" }} />
    </div>
  );
};

export default SuspenseLoader;
