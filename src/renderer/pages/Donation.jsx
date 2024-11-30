import React from "react";
import UserDonation from "../components/donation/UserDonation"

const Donation = () => {
  const role = localStorage.getItem("storedData");

  switch (role) {
    case "user":
      return <UserDonation />;
    // case "head nurse":
    //   return <HeadNurseDonation />;
    // case "doctor":
    //   return <DoctorDonation />;
    default:
      return <div>Role not recognized.</div>;
  }
};

export default Donation;
