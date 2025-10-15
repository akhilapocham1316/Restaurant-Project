import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("isAuthenticated");

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;


// import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
// // import { AuthContext } from "../context";

// export default function ProtectedRoute({ children }) {
//   const { token } = useContext(AuthContext);
//   return token ? children : <Navigate to="/login" />;
// }

