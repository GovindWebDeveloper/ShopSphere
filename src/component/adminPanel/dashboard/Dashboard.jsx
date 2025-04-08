import React from "react";
import TotalSales from "./TotalSales";
import TotalOrders from "./TotalOrders";
import TotalRevenue from "./TotalRevenue";
import SalesVsRevenue from "./SalesVsRevenue";

const Dashboard = () => {
  console.log("dashboard is rendered");
  return (
    <div>
      <TotalSales />
      <TotalOrders />
      <TotalRevenue />
      <SalesVsRevenue />
    </div>
  );
};

export default Dashboard;
