import React, { useState } from "react";
import UserForm from "../components/UserForm"
import DoctorForm from "../components/DoctorForm"
import HeadNurseForm from "../components/HeadNurseForm";
import Role from "../components/Role"

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("")

  if(step === 1) {
    return <Role setStep={setStep} setRole={setRole} role={role} />
  }

  switch (role) {
    case "user":
      return <UserForm />
    case "head nurse":
      return <HeadNurseForm />
    case "doctor":
      return <DoctorForm />
    default:
      console.log("Role not chosen")
  }
};

export default SignUp;
