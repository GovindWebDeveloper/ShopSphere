import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Input, Button, InputNumber, Select, Image, message } from "antd";
import { getProducts } from "../../../services/getServices";

const { Option } = Select;

const EditProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const products = await getProducts();
        const selectedProduct = products.find(
          (prod) => prod.id === parseInt(productId)
        );

        if (selectedProduct) {
          setProduct(selectedProduct);
        }
        setLoading(false);
      } catch (error) {
        message.error("Failed to fetch product details!");
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  // Set form values after product state is updated
  useEffect(() => {
    if (product) {
      form.setFieldsValue(product);
    }
  }, [product, form]);

  const handleSubmit = (values) => {
    console.log("Updated Product:", values);
    message.success("Product updated successfully!");
    navigate("/seller/view-product");
  };

  if (loading) {
    return <div>Loading product details...</div>;
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        background: "#fff",
        boxShadow: "0px 0px 10px grey",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Edit Product
      </h2>

      {product && (
        <>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <Image width={100} src={product.image} />
          </div>

          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="title"
              label="Title"
              rules={[
                { required: true, message: "Please enter product title" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="price"
              label="Price ($)"
              rules={[{ required: true, message: "Please enter price" }]}
            >
              <InputNumber min={1} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              name="stock"
              label="Stock Quantity"
              rules={[
                { required: true, message: "Please enter stock quantity" },
              ]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              name="category"
              label="Category"
              rules={[{ required: true, message: "Please select a category" }]}
            >
              <Select>
                <Option value="men's clothing">Men's Clothing</Option>
                <Option value="women's clothing">Women's Clothing</Option>
                <Option value="jewelery">Jewelery</Option>
                <Option value="electronics">Electronics</Option>
              </Select>
            </Form.Item>

            <Form.Item name="description" label="Description">
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit">
                Update Product
              </Button>
            </Form.Item>
          </Form>
        </>
      )}
    </div>
  );
};

export default EditProduct;
