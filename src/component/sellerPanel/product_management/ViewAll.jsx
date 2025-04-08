import React, { useState, useEffect } from "react";
import { Table, Image, Tag, Button, message, Popconfirm } from "antd";
import { getProducts } from "../../../services/getServices";
import { useNavigate } from "react-router-dom";
import { FaPlusSquare, FaEdit, FaTrashAlt } from "react-icons/fa";

const ViewAll = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productData = await getProducts();
        setProducts(productData);
        setLoading(false);
      } catch (error) {
        message.error("Failed to fetch products!");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (productId) => {
    navigate(`/seller/edit-product/${productId}`);
  };

  const handleDelete = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
    message.success("Product deleted successfully!");
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => <Image width={50} src={image} />,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => <Tag color="blue">{category}</Tag>,
    },
    {
      title: "Price ($)",
      dataIndex: "price",
      key: "price",
      render: (price) => <strong>${price.toFixed(2)}</strong>,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      render: (stock) => (
        <Tag color={stock > 10 ? "green" : "red"}>{stock} left</Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "0.2em" }}>
          <Button
            type="text"
            icon={<FaEdit />}
            onClick={() => handleEdit(record.id)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this product?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="text" icon={<FaTrashAlt />} danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ marginBottom: 20 }}>Product List</h2>
        <Button type="primary" onClick={() => navigate("/seller/add-product")}>
          <FaPlusSquare /> Add New
        </Button>
      </div>

      <div
        style={{
          borderRadius: "10px",
          background: "#fff",
          boxShadow: "0px 0px 10px grey",
          padding: "20px",
        }}
      >
        <Table
          columns={columns}
          dataSource={products}
          pagination={{ pageSize: 5 }}
          loading={loading}
          rowKey="id"
        />
      </div>
    </div>
  );
};

export default ViewAll;
