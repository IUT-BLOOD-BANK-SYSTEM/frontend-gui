import React from "react";
import NurseNotification from "../components/NurseNotification/NurseNotification";

const Notifications = () => {
  const role = localStorage.getItem("storedData");


      return <NurseNotification />;
};

export default Notifications;