import { RouteConstant } from "./routeConstant";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Products from "../pages/home/Products";
import NotFound from "../pages/NotFound";
import CheckoutFinal from "../component/userPanel/order/CheckoutFinal";
import MyFavorite from "../component/userPanel/favorite/Favorite";

const UserPublicRoutes = [
  {
    id: "home",
    title: "Home",
    path: RouteConstant.HOME,
    component: Home,
  },
  {
    id: "about",
    title: "About",
    path: RouteConstant.ABOUT,
    component: About,
  },
  {
    id: "contact",
    title: "Contact",
    path: RouteConstant.CONTACT,
    component: Contact,
  },
  {
    id: "login",
    title: "Login",
    path: RouteConstant.LOGIN,
    component: Login,
  },
  {
    id: "register",
    title: "Register",
    path: RouteConstant.REGISTER,
    component: Register,
  },
  {
    id: "products",
    title: "Products",
    path: RouteConstant.PRODUCTS,
    component: Products,
  },

  {
    id: "notfound",
    title: "NotFound",
    path: RouteConstant.NOTFOUND,
    component: NotFound,
  },
  {
    id: "checkout",
    title: "Checkout",
    path: RouteConstant.CHECKOUT,
    component: CheckoutFinal,
  },
  {
    id: "favorite",
    title: "Favorite",
    path: RouteConstant.FAVORITE,
    component: MyFavorite,
  },
];

export default UserPublicRoutes;
