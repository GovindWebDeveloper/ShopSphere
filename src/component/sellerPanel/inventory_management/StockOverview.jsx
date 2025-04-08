import React from "react";
import { Table, Image, Tag } from "antd";
import stock from "../../../assets/data/dummy_stock.json";

const StockOverview = () => {
  const columns = [
    {
      title: "Sr. No.",
      key: "serialNumber",
      render: (text, record, index) => <strong>{index + 1}</strong>,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => <strong>{category}</strong>,
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      render: (name) => <strong>{name}</strong>,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      render: (stock) => <strong>{stock}</strong>,
    },
    {
      title: "Sold",
      dataIndex: "sold",
      key: "sold",
      render: (sold) => <strong>{sold}</strong>,
    },
    {
      title: "Restock Level",
      dataIndex: "restockLevel",
      key: "restockLevel",
      render: (restockLevel) => <strong>{restockLevel}</strong>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "blue";
        if (status === "Low Stock") color = "gold";
        if (status === "In Stock") color = "green";
        if (status === "Out of Stock") color = "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h2 style={{ marginBottom: 20 }}>Stock Overview</h2>
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
          dataSource={stock}
          pagination={{ pageSize: 10 }}
          rowKey="id"
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};

export default StockOverview;
