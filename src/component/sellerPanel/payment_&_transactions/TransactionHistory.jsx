import React from "react";
import { Table, Tag } from "antd";
import { transactionHistory } from "../../../assets/data/TransactionData";

const TransactionHistory = () => {
  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
      render: (transactionId) => <Tag color="blue">{transactionId}</Tag>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date) => date,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => <strong>{amount}</strong>,
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "blue";
        if (status === "Pending") color = "orange";
        if (status === "Completed") color = "green";
        if (status === "Failed") color = "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
      render: (paymentMethod) => <Tag color="gold">{paymentMethod}</Tag>,
    },
  ];

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h2 style={{ marginBottom: 20 }}>Transaction History</h2>
      <p style={{ textAlign: "center", margin: "1em 0" }}>
        *** Here you can find all the Transaction History ***
      </p>
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
          dataSource={transactionHistory}
          pagination={{ pageSize: 10 }}
          rowKey="transactionId"
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};

export default TransactionHistory;
