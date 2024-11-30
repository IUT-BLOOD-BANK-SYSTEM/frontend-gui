import React from "react";
import UserNotification from "../components/notification/UserNotification";

const Notifications = () => {
  const role = localStorage.getItem("storedData");

  switch (role) {
    case "user":
      return <UserNotification />;
    // case "head nurse":
    //   return <HeadNurseNotification />;
    // case "doctor":
    //   return <DoctorNotification />;
    default:
      return <div>Role not recognized.</div>;
  }
};

export default Notifications;
