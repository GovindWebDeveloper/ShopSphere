import React from "react";
import { Table, Image, Tag, Button, message } from "antd";
import orders from "../../../assets/data/dummy_orders.json";

const CompletedOrders = () => {
  const handleViewDetails = (orderId) => {
    message.info(`Viewing details for Order ID: ${orderId}`);
  };

  const completedOrders = orders.filter(
    (order) => order.payment === "paid" || order.status === "Delivered"
  );

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
      render: (orderId) => <Tag color="blue">{orderId}</Tag>,
    },
    {
      title: "Image",
      dataIndex: "productImage",
      key: "productImage",
      render: (image) => <Image width={50} src={image} />,
    },
    {
      title: "Price ($)",
      dataIndex: "price",
      key: "price",
      render: (price) => <strong>${price.toFixed(2)}</strong>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity) => <Tag color="purple">{quantity}</Tag>,
    },
    {
      title: "Payment",
      dataIndex: "payment",
      key: "payment",
      render: (payment) => (
        <Tag color={payment === "Paid" ? "green" : "orange"}>{payment}</Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "blue";
        if (status === "Processing") color = "orange";
        if (status === "Pending") color = "gold";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Tracking ID",
      dataIndex: "tracking",
      key: "tracking",
      render: (tracking) => <Tag color="gold">{tracking}</Tag>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => handleViewDetails(record.orderId)}
        >
          {record.action}
        </Button>
      ),
    },
  ];

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h2 style={{ marginBottom: 20 }}>Completed Orders</h2>
      <div
        style={{
          borderRadius: "10px",
          background: "#fff",
          boxShadow: "0px 0px 10px grey",
          padding: "2em",
        }}
      >
        <p>**All the Completed orders will appear hear **</p>
        <br />
        <Table
          columns={columns}
          dataSource={completedOrders}
          pagination={{ pageSize: 5 }}
          rowKey="orderId"
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};

export default CompletedOrders;
