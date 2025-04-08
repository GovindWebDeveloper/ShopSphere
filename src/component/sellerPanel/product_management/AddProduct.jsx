import { Form, Input, Select, Upload, Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
const { TextArea } = Input;

const AddProduct = () => {
  const [fileList, setFileList] = useState([]);

  // Handle file upload change
  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  // Custom validation for min 4 images
  const validateMinImages = () => {
    if (fileList.length < 4) {
      return Promise.reject(new Error("You must upload at least 4 images!"));
    }
    return Promise.resolve();
  };

  return (
    <div>
      <h2 style={{ marginLeft: "1.5em" }}>Add Product</h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "1em",
        }}
      >
        {/* Left Form */}
        <div
          style={{
            width: "45%",
            borderRadius: "10px",
            padding: "20px",
            minHeight: "500px",
            background: "#fff",
            boxShadow: "0px 0px 10px grey",
          }}
        >
          <Form>
            <Form.Item
              label={
                <span style={{ fontSize: "15px", fontWeight: 600 }}>
                  Product Name
                </span>
              }
              layout="vertical"
              required
            >
              <Input placeholder="Enter Product Name" />
            </Form.Item>
            <br />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Item
                label={
                  <span style={{ fontSize: "15px", fontWeight: 600 }}>
                    Select Category
                  </span>
                }
                layout="vertical"
                required
                style={{ width: "48%" }}
              >
                <Select
                  placeholder="Select Category"
                  options={[
                    { value: "electronics", label: "Electronics" },
                    { value: "men's clothing", label: "Men's Clothing" },
                    { value: "women's clothing", label: "Women's Clothing" },
                    { value: "jewelery", label: "Jewelery" },
                  ]}
                />
              </Form.Item>

              <Form.Item
                label={
                  <span style={{ fontSize: "15px", fontWeight: 600 }}>
                    Select Brand
                  </span>
                }
                layout="vertical"
                style={{ width: "48%" }}
                required
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
            </div>
            <br />
            <Form.Item
              label={
                <span style={{ fontSize: "15px", fontWeight: 600 }}>Price</span>
              }
              layout="vertical"
              required
            >
              <Input placeholder="Enter Price" />
            </Form.Item>
            <br />
            <Form.Item
              label={
                <span style={{ fontSize: "15px", fontWeight: 600 }}>
                  Description
                </span>
              }
              layout="vertical"
              required
            >
              <TextArea
                rows={4}
                placeholder="Maximum Length is 200"
                maxLength={400}
              />
            </Form.Item>
          </Form>
        </div>

        {/* Right Form - Image Upload */}
        <div
          style={{
            width: "45%",
            borderRadius: "10px",
            padding: "20px",
            minHeight: "500px",
            background: "#fff",
            boxShadow: "0px 0px 10px grey",
          }}
        >
          <h3>Upload Product Images</h3>
          <br />
          <div>
            <Form>
              <Form.Item
                label="Product Images"
                name="images"
                layout="vertical"
                rules={[{ validator: validateMinImages }]}
                required
              >
                <Upload
                  multiple
                  listType="picture-card"
                  fileList={fileList}
                  onChange={handleChange}
                  beforeUpload={() => false}
                >
                  {fileList.length < 8 && (
                    <div
                      style={{
                        fontSize: "18px",
                        width: "120px",
                        height: "200px",
                      }}
                    >
                      {" "}
                      <PlusOutlined
                        style={{ fontSize: "32px", marginTop: 58 }}
                      />{" "}
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  )}
                </Upload>
              </Form.Item>
              <div style={{ display: "flex", gap: "10px" }}>
                <Button style={{ marginTop: "300px" }}>Cancel</Button>
                <Button
                  style={{ marginTop: "300px" }}
                  type="primary"
                  disabled={fileList.length < 4}
                  onClick={() => message.success("Product added successfully!")}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
