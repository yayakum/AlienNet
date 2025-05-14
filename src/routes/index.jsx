import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard.jsx";
import Blog from "../pages/Blog.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Blog" element={<Blog />} />
      {/* <Route path="*" element={<NotFound />} />  */}
    </Routes>
  );
};

export default AppRoutes;
