import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import authReducer from "./authentication/authSlice";
import favReducer from "./favorite/favSlice";
import userReducer from "./user/userProfileSlice";
import addressReducer from "./address/addressSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    fav: favReducer,
    profile: userReducer,
    address: addressReducer,
  },
});

export default store;
