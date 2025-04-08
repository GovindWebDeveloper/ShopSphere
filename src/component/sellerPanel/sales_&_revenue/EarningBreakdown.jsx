import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { earningsBreakdown } from "../../../assets/data/SalesOverview";
import { Card, Table } from "antd";

ChartJS.register(ArcElement, Tooltip, Legend);

const EarningBreakdown = () => {
  const data = {
    labels: earningsBreakdown.map((item) => item.category),
    datasets: [
      {
        data: earningsBreakdown.map((item) => Math.abs(item.amount)), // Convert negative values to positive
        backgroundColor: [
          "#4CAF50",
          "#2196F3",
          "#FF9800",
          "#F44336",
          "#9C27B0",
          "#FFC107",
        ],
        borderWidth: 1,
      },
    ],
  };
  const columns = [
    {
      title: "Category",
      dataIndex: "category",
      key: "key",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "key",
    },
    {
      title: "%",
      dataIndex: "percentage",
      key: "key",
    },
  ];
  return (
    <div style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
      <p>
        *** Welcome to the Earning Breakdown page here you will find all the
        Earning Breakdown details ***
      </p>
      <div
        style={{
          display: "flex",
          gap: "1em",
          marginTop: 20,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Card
          title="Earning Breakdown Chart"
          style={{ flex: "1 1 45%", minWidth: "300px" }}
        >
          <Pie data={data} />
        </Card>
        <Card
          title="Earning Breakdown Table"
          style={{ flex: "1 1 45%", minWidth: "300px" }}
        >
          <Table
            columns={columns}
            dataSource={earningsBreakdown}
            pagination={false}
          />
        </Card>
      </div>
    </div>
  );
};

export default EarningBreakdown;
