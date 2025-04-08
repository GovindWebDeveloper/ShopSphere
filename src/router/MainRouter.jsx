import React from "react";
import { Routes, Route } from "react-router-dom";
import UserPublicRouter from "./UserPublicRouter";
import NotFound from "../pages/NotFound";
import AdminPanelLayout from "../layout/AdminPanelLayout";
import SellerPanelLayout from "../layout/SellerPanelLayout";
import Dashboard from "../component/adminPanel/dashboard/Dashboard";
import AddProduct from "../component/sellerPanel/product_management/AddProduct";
import ViewAll from "../component/sellerPanel/product_management/ViewAll";
import EditProduct from "../component/sellerPanel/product_management/EditProduct";
import AllOrders from "../component/sellerPanel/order_management/AllOrders";
import PendingOrders from "../component/sellerPanel/order_management/PendingOrders";
import CompletedOrders from "../component/sellerPanel/order_management/CompletedOrders";
import CancelledOrders from "../component/sellerPanel/order_management/CancelledOrders";
import StockOverview from "../component/sellerPanel/inventory_management/StockOverview";
import LowStockAlert from "../component/sellerPanel/inventory_management/LowStockAlert";
import SalesOverview from "../component/sellerPanel/sales_&_revenue/SalesOverview";
import EarningBreakdown from "../component/sellerPanel/sales_&_revenue/EarningBreakdown";
import TransactionHistory from "../component/sellerPanel/payment_&_transactions/TransactionHistory";
import RequestPayout from "../component/sellerPanel/payment_&_transactions/RequestPayout";
import AllReviews from "../component/sellerPanel/review_&_rating/AllReviews";
import EditProfile from "../component/sellerPanel/profile_&_settings/EditProfile";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<UserPublicRouter />} />

      <Route path="admin" element={<AdminPanelLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="seller" element={<SellerPanelLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="view-product" element={<ViewAll />} />
        <Route path="edit-product/:productId" element={<EditProduct />} />
        <Route path="all-orders" element={<AllOrders />} />
        <Route path="pending-orders" element={<PendingOrders />} />
        <Route path="completed-orders" element={<CompletedOrders />} />
        <Route path="cancelled-orders" element={<CancelledOrders />} />
        <Route path="stock-overview" element={<StockOverview />} />
        <Route path="low-stock-alert" element={<LowStockAlert />} />
        <Route path="sales-overview" element={<SalesOverview />} />
        <Route path="earnings-breakdown" element={<EarningBreakdown />} />
        <Route path="transaction-history" element={<TransactionHistory />} />
        <Route path="payout-requests" element={<RequestPayout />} />
        <Route path="all-reviews" element={<AllReviews />} />
        <Route path="edit-profile" element={<EditProfile />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
