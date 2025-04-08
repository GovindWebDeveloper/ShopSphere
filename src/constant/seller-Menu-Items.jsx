import { AiOutlineDashboard, AiOutlineSetting } from "react-icons/ai";
import { FiBox, FiTruck, FiBarChart2, FiCreditCard } from "react-icons/fi";
import {
  MdOutlineReviews,
  MdInventory,
  MdOutlineSupportAgent,
} from "react-icons/md";

function getItem(label, key, icon, children, onClick) {
  return {
    key,
    icon,
    children,
    label,
    onClick,
  };
}

const sellerMenuItems = (navigate) => [
  getItem("Dashboard", "/seller", <AiOutlineDashboard />, null, () =>
    navigate("/seller")
  ),
  getItem("Product Management", "/seller/product-management", <FiBox />, [
    getItem("Add Product", "/seller/add-product", null, null, () =>
      navigate("/seller/add-product")
    ),
    getItem("View All", "/seller/view-product", null, null, () =>
      navigate("/seller/view-product")
    ),
    getItem("Edit Product", "/seller/edit-product/:productId", null, null, () =>
      navigate("/seller/edit-product/:productId")
    ),
  ]),
  getItem("Order Management", "/seller/order-management", <FiTruck />, [
    getItem("All Orders", "/seller/all-orders", null, null, () =>
      navigate("/seller/all-orders")
    ),
    getItem("Pending Orders", "/seller/pending-orders", null, null, () =>
      navigate("/seller/pending-orders")
    ),
    getItem("Completed Orders", "/seller/completed-orders", null, null, () =>
      navigate("/seller/completed-orders")
    ),
    getItem("Cancelled Orders", "/seller/cancelled-orders", null, null, () =>
      navigate("/seller/cancelled-orders")
    ),
  ]),
  getItem(
    "Inventory Management",
    "/seller/inventory-management",
    <MdInventory />,
    [
      getItem("Stock Overview", "/seller/stock-overview", null, null, () =>
        navigate("/seller/stock-overview")
      ),
      getItem("Low Stock Alert", "/seller/low-stock-alert", null, null, () =>
        navigate("/seller/low-stock-alert")
      ),
    ]
  ),
  getItem("Sales & Revenue Report", "/seller/sales-revenue", <FiBarChart2 />, [
    getItem("Sales Overview", "/seller/sales-overview", null, null, () =>
      navigate("/seller/sales-overview")
    ),
    getItem(
      "Earnings Breakdown",
      "/seller/earnings-breakdown",
      null,
      null,
      () => navigate("/seller/earnings-breakdown")
    ),
  ]),
  getItem(
    "Payment & Transactions",
    "/seller/payments-transactions",
    <FiCreditCard />,
    [
      getItem(
        "Transaction History",
        "/seller/transaction-history",
        null,
        null,
        () => navigate("/seller/transaction-history")
      ),
      getItem("Payout Requests", "/seller/payout-requests", null, null, () =>
        navigate("/seller/payout-requests")
      ),
    ]
  ),
  getItem(
    "Reviews & Ratings",
    "/seller/reviews-ratings",
    <MdOutlineReviews />,
    [
      getItem("All Reviews", "/seller/all-reviews", null, null, () =>
        navigate("/seller/all-reviews")
      ),
    ]
  ),
  getItem(
    "Profile & Settings",
    "/seller/profile-settings",
    <AiOutlineSetting />,
    [
      getItem("Edit Profile", "/seller/edit-profile", null, null, () =>
        navigate("/seller/edit-profile")
      ),
      getItem("Business Details", "/seller/business-details", null, null, () =>
        navigate("/seller/business-details")
      ),
      getItem(
        "Bank Account Info",
        "/seller/bank-account-info",
        null,
        null,
        () => navigate("/seller/bank-account-info")
      ),
      getItem("Tax Information", "/seller/tax-information", null, null, () =>
        navigate("/seller/tax-information")
      ),
      getItem("Change Password", "/seller/change-password", null, null, () =>
        navigate("/seller/change-password")
      ),
    ]
  ),
  getItem("Support & Help", "/seller/support-help", <MdOutlineSupportAgent />, [
    getItem("Contact Admin", "/seller/contact-admin", null, null, () =>
      navigate("/seller/contact-admin")
    ),
    getItem("FAQs & Help Center", "/seller/faqs-help-center", null, null, () =>
      navigate("/seller/faqs-help-center")
    ),
    getItem("Live Chat Support", "/seller/live-chat-support", null, null, () =>
      navigate("/seller/live-chat-support")
    ),
  ]),
];

export default sellerMenuItems;
