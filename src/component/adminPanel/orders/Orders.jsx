import React from "react";
import OrderTable from "./OrderTable";
import OrderGraph from "./OrderGraph";
import OrderStatus from "./OrderStatus";

const Orders = () => {
  return (
    <div>
      <OrderTable />
      <OrderGraph />
      <OrderStatus />
    </div>
  );
};

export default Orders;
