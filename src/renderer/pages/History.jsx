import React from "react";
import HeadNurseHistory from "../components/history/HeadNurseHistory";
import DoctorHistory from "../components/history/DoctorHistory";
import UserHistoryDonation from "../components/history/UserHistoryDonation";

const History = () => {
  const { role } = JSON.parse(localStorage.getItem("user"));
  switch (role) {
    case "user":
      return <UserHistoryDonation />;
    case "headNurse":
      return <HeadNurseHistory />;
    case "doctor":
      return <DoctorHistory />;
    default:
      return <div>Role not recognized.</div>;
  }
};

export default History;
