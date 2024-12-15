import React from "react";
import UserDashboard from "../components/dashboard/UserDashboard";
import HeadNurseDashboard from "../components/dashboard/HeadNurseDashboard";
import DoctorDashboard from "../components/dashboard/DoctorDashboard";
import AdminDashboard from "../pages/AdminDashboard";

const Dashboard = () => {
  const {role} = JSON.parse(localStorage.getItem("user"));

  switch (role) {
    case "user":
      return <UserDashboard />;
    case "headNurse":
      return <HeadNurseDashboard />;
    case "doctor":
      return <DoctorDashboard />;
    case "admin":
      return <AdminDashboard />;
    default:
      return <h1>Oops! Something went wrong...</h1>;
  }
};

export default Dashboard;
