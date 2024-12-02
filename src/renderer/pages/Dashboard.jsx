import React from "react";
import UserDashboard from "../components/dashboard/UserDashboard";
import HeadNurseDashboard from "../components/dashboard/HeadNurseDashboard";
import DoctorDashboard from "../components/dashboard/DoctorDashboard";

const Dashboard = () => {
  const role = localStorage.getItem("storedData");

  switch (role) {
    case "user":
      return <UserDashboard />;
    case "headNurse":
      return <HeadNurseDashboard />;
    case "doctor":
      return <DoctorDashboard />;
    default:
      return <div>Role not recognized.</div>;
  }
};

export default Dashboard;
