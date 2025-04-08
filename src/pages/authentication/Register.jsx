import Images from "../../assets/Images/ImageComponent/Images";
import { Input, Button, Form, Radio, message, Select } from "antd";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/authentication/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleClickHaveAccount = () => {
    navigate("/login");
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await dispatch(
        registerUser({
          username: values.email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
          gender: values.gender,
          userType: values.userType,
        })
      );
      message.success("Registration Success | Please Login !!!");
      navigate("/login");
    } catch (error) {
      message.error("Registration Failed. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  const options = [
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
      value: "Female",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${Images.BgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "700px",
          height: "600px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          border: "1px solid grey",
          padding: "2em",
          background: "linear-gradient(#e66465, #9198e5)",
          borderRadius: "10px",
          boxShadow: "1px 1px 10px grey",
          marginLeft: "10em",
        }}
      >
        <h1 style={{ color: "white", fontSize: "3em" }}>
          User Registration Form
        </h1>
        <div style={{ width: "100%" }}>
          <Form name="registrationForm" onFinish={onFinish}>
            <Form.Item name="userType">
              <Select
                defaultValue={"Select UserType"}
                options={[
                  { label: "User", value: "user" },
                  { label: "Admin", value: "admin" },
                  { label: "Seller", value: "seller" },
                ]}
                style={{ width: "50%" }}
              />
            </Form.Item>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Form.Item
                name="firstName"
                rules={[{ required: true, message: "Please input First Name" }]}
              >
                <Input
                  placeholder="First Name"
                  style={{ width: "300px", height: "3em", marginTop: "1em" }}
                />
              </Form.Item>
              <Form.Item
                name="lastName"
                rules={[{ required: true, message: "Please input Last Name" }]}
              >
                <Input
                  placeholder="Last Name"
                  style={{ width: "295px", height: "3em", marginTop: "1em" }}
                />
              </Form.Item>
            </div>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email" }]}
            >
              <Input
                placeholder="Email example@domain.com"
                style={{ width: "100%", height: "3em", marginTop: "1em" }}
              />
            </Form.Item>
            <Form.Item
              name="gender"
              rules={[{ required: true, message: "Please Select your Gender" }]}
            >
              <Radio.Group
                block
                options={options}
                defaultValue=""
                optionType="button"
                buttonStyle="solid"
                style={{
                  width: "100%",
                  height: "3em",
                  marginTop: "1em",
                }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password" },
              ]}
            >
              <Input.Password
                placeholder="Password"
                style={{ width: "100%", height: "3em", marginTop: "1em" }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                style={{
                  width: "100%",
                  height: "2em",
                  fontSize: "1.3em",
                  fontFamily: "sans-serif",
                }}
              >
                SignUp
              </Button>
            </Form.Item>
            <p style={{ fontSize: "1.3em" }}>
              Already have an account? Please{" "}
              <a style={{ color: "blue" }} onClick={handleClickHaveAccount}>
                Login here...
              </a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
