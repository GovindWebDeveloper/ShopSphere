import React from "react";
import adminPrivateRoute from "../constant/adminPrivateRoute";
import { Route, Routes } from "react-router-dom";
import AdminPanelLayout from "../layout/AdminPanelLayout";
import NotFound from "../pages/NotFound";

const AdminPrivateRouter = () => {
  const adminPrivateList = adminPrivateRoute;
  return (
    <Routes>
      <Route path="/admin" element={<AdminPanelLayout />}>
        {adminPrivateList.map((e) => {
          return <Route key={e.id} path={e.path} element={<e.component />} />;
        })}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AdminPrivateRouter;
