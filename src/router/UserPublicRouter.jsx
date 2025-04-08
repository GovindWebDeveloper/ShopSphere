import React from "react";
import UserPublicRoutes from "../constant/userPublicRoute";
import { Route, Routes } from "react-router-dom";
import UserPanelLayout from "../layout/UserPanelLayout";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import NotFound from "../pages/NotFound";

const UserPublicRouter = () => {
  const publicRouteList = UserPublicRoutes;
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<UserPanelLayout />}>
        {publicRouteList.map((e) => {
          return <Route key={e.id} path={e.path} element={<e.component />} />;
        })}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default UserPublicRouter;
