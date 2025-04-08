import React from "react";
import { Button, Table } from "antd";
import { salesData } from "../../../assets/data/SalesData";
import { ExportOutlined } from "@ant-design/icons";

const OrderTable = () => {
  const columns = [
    {
      title: "Months",
      dataIndex: "month",
      key: "month",
    },
    {
      title: "Orders (Qty)",
      dataIndex: "orders",
      key: "orders",
      sorter: (a, b) => a.orders - b.orders,
    },
    {
      title: "Total Sales (Rs.)",
      dataIndex: "totalSales",
      key: "totalSales",
      sorter: (a, b) => a.totalSales - b.totalSales,
    },
    {
      title: "Revenue (Rs.)",
      dataIndex: "revenue",
      key: "revenue",
      sorter: (a, b) => a.revenue - b.revenue,
    },
  ];

  return (
    <>
      <div style={{ marginBottom: "2em" }}>
        <h1>Order Details</h1>
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
            Export All Order
          </Button>
        </div>
        <div>
          <Table
            bordered={true}
            columns={columns}
            dataSource={salesData}
            pagination={{ pageSize: 5 }}
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

export default OrderTable;
