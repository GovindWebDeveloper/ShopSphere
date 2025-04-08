import React, { useState } from "react";
import { payoutRequests } from "../../../assets/data/TransactionData";
import { Card, Divider, Table, Tag } from "antd";
import Statistic from "antd/es/statistic/Statistic";

const RequestPayout = () => {
  const [filteredStatus, setFilteredStatus] = useState(null);

  const totalRequests = payoutRequests.length;
  const totalCompleted = payoutRequests.filter(
    (data) => data.status === "Completed"
  ).length;
  const totalPending = payoutRequests.filter(
    (data) => data.status === "Pending"
  ).length;
  const totalRejected = payoutRequests.filter(
    (data) => data.status === "Rejected"
  ).length;

  // Toggle filter logic
  const handleCardClick = (status) => {
    setFilteredStatus((prevStatus) => (prevStatus === status ? null : status));
  };

  const filteredData = filteredStatus
    ? payoutRequests.filter((data) => data.status === filteredStatus)
    : payoutRequests;

  const columns = [
    {
      title: "Sr. No.",
      key: "serialNumber",
      render: (text, record, index) => <strong>{index + 1}</strong>,
    },
    {
      title: "Request Id",
      dataIndex: "requestId",
      render: (requestId) => <strong>{requestId}</strong>,
    },
    {
      title: "Request Date",
      dataIndex: "requestDate",
    },
    {
      title: "Amount Requested",
      dataIndex: "amountRequested",
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        let color = "blue";
        if (status === "Completed") color = "green";
        if (status === "Pending") color = "yellow";
        if (status === "Rejected") color = "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Processing Date",
      dataIndex: "processingDate",
    },
    {
      title: "Completion Date",
      dataIndex: "completionDate",
    },
    {
      title: "Fee",
      dataIndex: "fee",
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "1em",
          cursor: "pointer",
        }}
      >
        <Card
          title="Total Requests"
          onClick={() => handleCardClick(null)}
          style={{
            width: 200,
            borderLeft: `5px solid blue`,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: filteredStatus === null ? "#f0f5ff" : "#fff",
          }}
        >
          <Statistic value={totalRequests} />
        </Card>
        <Card
          title="Completed"
          onClick={() => handleCardClick("Completed")}
          style={{
            width: 200,
            borderLeft: `5px solid green`,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor:
              filteredStatus === "Completed" ? "#f6ffed" : "#fff",
          }}
        >
          <Statistic value={totalCompleted} />
        </Card>
        <Card
          title="Pending"
          onClick={() => handleCardClick("Pending")}
          style={{
            width: 200,
            borderLeft: `5px solid yellow`,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: filteredStatus === "Pending" ? "#fffbe6" : "#fff",
          }}
        >
          <Statistic value={totalPending} />
        </Card>
        <Card
          title="Rejected"
          onClick={() => handleCardClick("Rejected")}
          style={{
            width: 200,
            borderLeft: `5px solid red`,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: filteredStatus === "Rejected" ? "#fff1f0" : "#fff",
          }}
        >
          <Statistic value={totalRejected} />
        </Card>
      </div>

      <Divider />

      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 10 }}
        rowKey="transactionId"
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default RequestPayout;
