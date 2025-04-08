import React from "react";
import { Button, Table } from "antd";
import { stockData } from "../../../assets/data/SalesData";
import { ExportOutlined } from "@ant-design/icons";

const CategoryTable = () => {
  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Available Stock(Qty)",
      dataIndex: "stockAvailable",
      key: "stockAvailable",
      sorter: (a, b) => a.stockAvailable - b.stockAvailable,
    },
    {
      title: "Sold(Qty)",
      dataIndex: "sold",
      key: "sold",
      sorter: (a, b) => a.sold - b.sold,
    },
    {
      title: "Pending (Qty)",
      dataIndex: "pending",
      key: "pending",
      sorter: (a, b) => a.pending - b.pending,
    },
  ];

  return (
    <>
      <div style={{ marginBottom: "2em" }}>
        <h1>All Category</h1>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1em",
          }}
        >
          <h2>Order Sales Data</h2>
          <Button variant="outlined" color="blue">
            <ExportOutlined />
            Export All Category
          </Button>
        </div>
        <div>
          <Table
            bordered={true}
            columns={columns}
            dataSource={stockData}
            pagination={{ pageSize: 7 }}
            style={{
              borderRadius: "10px",
              boxShadow: "1px 1px 10px grey",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryTable;
