import React from "react";
import DoctorProfile from "../components/profile/DoctorProfile";
import UserProfile from "../components/profile/UserProfile";
import HeadNurseProfile from "../components/profile/HeadNurseProfile";

const Profile = () => {
  const { role } = JSON.parse(localStorage.getItem("user"));

  switch (role) {
    case "user":
      return <UserProfile />;
    case "headNurse":
      return <HeadNurseProfile />;
    case "doctor":
      return <DoctorProfile />;
    default:
      console.log("Role not chosen");
      return null;
  }
};

export default Profile;
