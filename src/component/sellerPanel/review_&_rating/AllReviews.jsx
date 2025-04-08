import React from "react";
import { Image, Table } from "antd";
import { reviewsData } from "../../../assets/data/dummy_review";

const AllReviews = () => {
  const columns = [
    {
      title: "Sr. No.",
      key: "serialNumber",
      render: (text, record, index) => index + 1,
    },
    {
      title: "User Avatar",
      dataIndex: "reviewerAvatar",
      render: (reviewerAvatar) => (
        <Image
          width={80}
          src={reviewerAvatar}
          style={{ borderRadius: "100px" }}
        />
      ),
    },
    {
      title: "Reviewer Name",
      dataIndex: "reviewerName",
      render: (reviewerName) => reviewerName,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      render: (rating) => rating,
    },
    {
      title: "Review",
      dataIndex: "review",
      render: (review) => (
        <p style={{ width: "150px", textWrap: "wrap" }}>
          <i>"{review}"</i>
        </p>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (date) => date,
    },
    {
      title: "Product",
      dataIndex: "product",
      render: (product) => product,
    },
  ];

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h2 style={{ marginBottom: 20 }}>All Orders</h2>
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
          dataSource={reviewsData}
          pagination={{ pageSize: 10 }}
          rowKey="id"
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};

export default AllReviews;
