import React, { useState, useEffect } from "react";
import UserForm from "../components/forms/UserForm";
import DoctorForm from "../components/forms/DoctorForm";
import HeadNurseForm from "../components/forms/HeadNurseForm";
import Role from "../components/forms/Role";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");

  if (step === 1) {
    return <Role setStep={setStep} setRole={setRole} role={role} />;
  }

  switch (role) {
    case "user":
      return <UserForm />;
    case "headNurse":
      return <HeadNurseForm />;
    case "doctor":
      return <DoctorForm />;
    default:
      console.log("Role not chosen");
      return null;
  }
};

export default SignUp;
