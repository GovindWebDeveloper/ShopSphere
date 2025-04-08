import { Form, Input, Select, Upload, Button, message, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const { TextArea } = Input;

const AddProduct = () => {
  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const validateMinImages = () => {
    if (fileList.length < 4) {
      return Promise.reject(new Error("You must upload at least 4 images!"));
    }
    return Promise.resolve();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "1em" }}>Add Product</h2>
      <Row gutter={[24, 24]}>
        {/* Left Form */}
        <Col xs={24} md={12}>
          <div
            style={{
              borderRadius: "10px",
              padding: "20px",
              minHeight: "500px",
              background: "#fff",
              boxShadow: "0px 0px 10px grey",
            }}
          >
            <Form layout="vertical">
              <Form.Item
                label="Product Name"
                name="productName"
                rules={[
                  { required: true, message: "Please enter product name" },
                ]}
              >
                <Input placeholder="Enter Product Name" />
              </Form.Item>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Select Category"
                    name="category"
                    rules={[{ required: true, message: "Select category" }]}
                  >
                    <Select
                      placeholder="Select Category"
                      options={[
                        { value: "electronics", label: "Electronics" },
                        { value: "men's clothing", label: "Men's Clothing" },
                        {
                          value: "women's clothing",
                          label: "Women's Clothing",
                        },
                        { value: "jewelery", label: "Jewelery" },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Select Brand"
                    name="brand"
                    rules={[{ required: true, message: "Select brand" }]}
                  >
                    <Select
                      placeholder="Select Brand"
                      options={[
                        { value: "hp", label: "HP" },
                        { value: "gucci", label: "Gucci" },
                        { value: "siyaram", label: "Siyaram" },
                        { value: "tanishq", label: "Tanishq" },
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: "Enter price" }]}
              >
                <Input placeholder="Enter Price" />
              </Form.Item>

              <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: "Enter description" }]}
              >
                <TextArea
                  rows={4}
                  maxLength={400}
                  placeholder="Max 400 characters"
                />
              </Form.Item>
            </Form>
          </div>
        </Col>

        {/* Right Form - Image Upload */}
        <Col xs={24} md={12}>
          <div
            style={{
              borderRadius: "10px",
              padding: "20px",
              minHeight: "500px",
              background: "#fff",
              boxShadow: "0px 0px 10px grey",
            }}
          >
            <h3>Upload Product Images</h3>
            <Form layout="vertical">
              <Form.Item
                label="Product Images"
                name="images"
                rules={[{ validator: validateMinImages }]}
              >
                <Upload
                  multiple
                  listType="picture-card"
                  fileList={fileList}
                  onChange={handleChange}
                  beforeUpload={() => false}
                >
                  {fileList.length < 8 && (
                    <div>
                      <PlusOutlined
                        style={{ fontSize: "32px", marginTop: 20 }}
                      />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  )}
                </Upload>
              </Form.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "10px",
                }}
              >
                <Button>Cancel</Button>
                <Button
                  type="primary"
                  disabled={fileList.length < 4}
                  onClick={() => message.success("Product added successfully!")}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AddProduct;
