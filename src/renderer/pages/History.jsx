import React from "react";
import UserHistory from "../components/history/UserHistory";
import HeadNurseHistory from "../components/history/HeadNurseHistory";
import DoctorHistory from "../components/history/DoctorHistory";

const History = () => {
  const role = localStorage.getItem("storedData");
  switch (role) {
    case "user":
      return <UserHistory />;
    case "headNurse":
      return <HeadNurseHistory />;
    case "doctor":
      return <DoctorHistory />;
    default:
      return <div>Role not recognized.</div>;
  }
};

export default History;
