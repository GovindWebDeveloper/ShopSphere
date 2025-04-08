
import Dashboard from "../component/adminPanel/dashboard/Dashboard";
import Orders from "../component/adminPanel/orders/Orders";
import { RouteConstant } from "./routeConstant";
import ProductCategory from "../component/adminPanel/productsCategory/ProductCategory";
import UserMain from "../component/adminPanel/users/UserMain";

const adminPrivateRoute = [
  {
    id: "admin",
    title: "Admin",
    path: RouteConstant.DASHBOARD,
    component: Dashboard,
  },
  {
    id: "orders",
    title: "Orders",
    path: RouteConstant.ORDERS,
    component: Orders,
  },
  {
    id: "product-category",
    title: "Product-Category",
    path: RouteConstant.PRODUCTCATEGORY,
    component: ProductCategory,
  },
  {
    id: "users",
    title: "Users",
    path: RouteConstant.USERS,
    component: UserMain,
  },
];
export default adminPrivateRoute;
