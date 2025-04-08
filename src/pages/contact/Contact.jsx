import { Form, Input, Button, Row, Col, Card } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { IoMdTime } from "react-icons/io";

const Contact = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Form Submitted:", values);
    form.resetFields();
  };

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "auto" }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={14}>
          <Card
            title="Contact Us"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item
                name="name"
                label="Your Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Your Email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item name="subject" label="Subject">
                <Input placeholder="Enter subject" />
              </Form.Item>
              <Form.Item
                name="message"
                label="Your Message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Write your message here..."
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col xs={24} md={10}>
          <Card
            title="Contact Information"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p>
              <EnvironmentOutlined /> <strong>Address:</strong> C3/23, Alaka
              Abasan, DJ Block, Newtown, Kolkata-700160
            </p>
            <p>
              <PhoneOutlined /> <strong>Phone:</strong> +91 (0653) 669-4572
            </p>
            <p>
              <MailOutlined /> <strong>Email:</strong>{" "}
              <a href="#">support@shopsphere.com</a>
            </p>
            <p>
              <IoMdTime style={{ fontSize: "1.2em" }} />
              <strong>Working Hours:</strong> Mon - Fri: 9 AM - 6 PM
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
