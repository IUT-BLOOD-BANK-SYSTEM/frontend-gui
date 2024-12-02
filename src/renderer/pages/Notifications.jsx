import React from "react";
import NurseNotification from "../components//notifications/NurseNotification";
import UserNotification from "../components/notifications/UserNotification";
import DoctorNotification from "../components/notifications/DoctorNotifaction";

const Notifications = () => {
  const role = localStorage.getItem("storedData");

  switch (role) {
    case "user":
      return <UserNotification />;
    case "headNurse":
      return <NurseNotification />;
    case "doctor":
      return <DoctorNotification />;
    default:
      console.log("Role not chosen");
      return null;
  }
};

export default Notifications;
