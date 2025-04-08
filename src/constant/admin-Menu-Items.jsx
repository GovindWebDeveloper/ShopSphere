import {
  AiOutlineDashboard,
  AiOutlineShop,
  AiOutlineGift,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  FiUsers,
  FiBox,
  FiTruck,
  FiBarChart2,
  FiCreditCard,
} from "react-icons/fi";
import { MdOutlineReviews, MdOutlineSupportAgent } from "react-icons/md";

function getItem(label, key, icon, children) {
  return {
    label,
    key,
    icon,
    children,
  };
}

const sellerMenuItems = [
  getItem("Dashboard", "dashboard", <AiOutlineDashboard />),
  getItem("Seller Management", "seller-management", <AiOutlineShop />, [
    getItem(" All Sellers", "all-seller"),
    getItem("New Requests", "new-request"),
    getItem("Top Performing", "top-performing"),
    getItem("Flagged Sellers", "flagged-seller"),
    getItem("Payouts & Commissions", "payouts-commissions"),
  ]),
  getItem("Customer Management", "customer-management", <FiUsers />, [
    getItem("All Customers", "all-customers"),
    getItem("Total Registered", "total-registered"),
    getItem("Order History", "order-history"),
    getItem("Top Spending", "top-spending"),
    getItem(" Send Emails/Notifications", "send-email-notification"),
  ]),
  getItem("Product Management", "Product-management", <FiBox />, [
    getItem("All Listed Product", "listed-product"),
    getItem("Top Selling", "top-selling"),
    getItem("Out of Stock", "out-of-stock"),
    getItem("Approve/Reject new Product", "accept-reject-new-product"),
    getItem("Reviews & Ratings", "review-rating"),
  ]),
  getItem("Order Management", "order-management", <FiTruck />, [
    getItem("Order List", "order-list"),
    getItem("Pending Order", "pending-order"),
    getItem("Completed Order", "completed-order"),
    getItem("Cancelled Order", "cancelled-order"),
    getItem("Return & Refund", "return-refund"),
    getItem("Generate Invoice", "generate-invoice"),
  ]),
  getItem("Sales & Revenue Reports", "sales-revenue-reports", <FiBarChart2 />, [
    getItem("Total Revenue", "total-revenue"),
    getItem("Top Selling Category", "top-selling-category"),
    getItem("Earnings Breakdown by Sellers", "earnings-breakdown-by-sellers"),
    getItem("Sales Reports (Daily/Weekly/Monthly)", "sales-reports"),
  ]),
  getItem("Payment & Transactions", "payment-transactions", <FiCreditCard />, [
    getItem("Seller Payout Requests", "seller-payout-request"),
    getItem("Pending & Completed Payouts", "pending-completed-payouts"),
    getItem("Failed Transactions", "failed-transactions"),
    getItem("Commission Earned by Platform", "commission-earned-plateform"),
  ]),
  getItem(" Reviews & Feedback", "review-feedback", <MdOutlineReviews />, [
    getItem(" Customer & Seller Reviews", "customer-seller-review"),
    getItem(" All Product Reviews", "all-product-reviews"),
    getItem(
      "Top-Rated & Worst-Rated Products",
      "top-rated-worst-rated-products"
    ),
    getItem("Flagged Reviews (Spam, Offensive, etc.)", "flagged-reviews"),
  ]),
  getItem("Support & Help", "support-help", <MdOutlineSupportAgent />, [
    getItem("Contact Admin", "contact-admin"),
    getItem("FAQs & Help Center", "faqs-help-center"),
    getItem("Live Chat Support", "live-chat-support"),
  ]),
  getItem("Discount & Coupons", "discount-coupons", <AiOutlineGift />, [
    getItem("All Active Discounts", "all-active-discounts"),
    getItem(" Create New Discount Codes", "create-new-discount-codes"),
    getItem("Upcoming & Expired Coupons", "upcoming-expired-coupons"),
  ]),
  getItem(
    "Admin Settings & Configurations",
    "admin-settings-configuration",
    <AiOutlineSetting />,
    [
      getItem("User Roles & Permissions", "user-roles-permissions"),
      getItem(
        " Website Configuration (Logo, Theme, Payment Gateway, etc.)",
        "website-Configuration "
      ),
      getItem("Manage API Keys & Webhooks", "manage-API-keys-webhooks"),
      getItem("SEO & Meta Settings", "SEO-meta-settings"),
    ]
  ),
];

export default sellerMenuItems;
