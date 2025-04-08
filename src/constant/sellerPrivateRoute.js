import SellerDashboard from "../component/sellerPanel/dashboard/SellerDashboard";
import { RouteConstant } from "./routeConstant";

const sellerPrivateRoute = [
  {
    id: "sellerDashboard",
    title: "SellerDashboard",
    path: RouteConstant.SELLERDASHBOARD,
    component: SellerDashboard,
  },
];

export default sellerPrivateRoute;
