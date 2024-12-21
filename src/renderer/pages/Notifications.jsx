import React from "react";
import NurseNotification from "../components/notifications/NurseNotification";
import UserNotification from "../components/notifications/UserNotification";
import DoctorNotification from "../components/notifications/DoctorNotifications";

const Notifications = () => {
  const { role } = JSON.parse(localStorage.getItem("user"));

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
