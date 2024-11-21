import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const { role } = location.state;

  switch (role) {
    case "user":
      return <div>User Dashboard</div>;
    case "head nurse":
      return <div>Head Nurse Dashboard</div>;
    case "doctor":
      return <div>Doctor Dashboard</div>;
    default:
      return <div>Role not recognized.</div>;
  }
};

export default Dashboard;
