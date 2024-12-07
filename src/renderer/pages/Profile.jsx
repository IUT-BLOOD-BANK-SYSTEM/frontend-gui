import React from 'react'
import DoctorProfile from '../components/profile/DoctorProfile';
import UserProfile from '../components/profile/UserProfile';

const Profile = () => {
  
   const role = localStorage.getItem("storedData");

    switch (role) {
      case "user":
        return <UserProfile />;
      case "headNurse":
        return <NurseProfile />;
      case "doctor":
        return <DoctorProfile />;
      default:
        console.log("Role not chosen");
        return null;
    }
  
}

export default Profile