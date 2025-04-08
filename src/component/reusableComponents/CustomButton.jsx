import { Button } from "antd";

const CustomButton = ({
  text,
  onClick,
  type = {},
  disabled = false,
  style = {},
  icon = {},
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        background: "#ffab45",
        fontWeight: "600",
        color:"white",
        ...style,
        ...icon,
        ...type,
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
