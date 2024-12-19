import React, { useRef, useState } from "react";
import Heading from "../reusable/Heading";
import FormField from "../reusable/FormField";
import SubmitButton from "../reusable/SubmitButton";
import SignUpFooter from "../reusable/SignUpFooter";
import { Link, useNavigate } from "react-router-dom";
import useGetHospital from "../../hooks/useGetHospital";

const DoctorForm = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { customHospitals, isLoading } = useGetHospital();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match!");
      setLoading(false);
      return;
    }

    const payload = {
      type: "register",
      payload: {
        first_name: data.firstName,
        second_name: data.secondName,
        date_of_birth: data.birth_date.toString(),
        phone_number: data.phoneNumber,
        email: data.email,
        hospital_id: data.hospital,
        specialization: data.specialization,
        password: data.password,
      },
    };

    window.electron.sendTCPMessage(payload);
    window.electron.onTCPMessage((response) => {
      if (response.type !== "register_response") return;
      if (response.status === "success") {
        toast.success("Registration successful!");
        localStorage.setItem(
          "user",
          JSON.stringify({ role: "doctor", token: response.payload.token })
        );
        formRef.current.reset();
        navigate("/dashboard");
      } else {
        toast.error(`Registration failed: ${response.message}`);
      }
    });
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-1/2">
        <Heading />
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="First Name"
              name="firstName"
              type="text"
              placeholder="First Name"
              required
            />
            <FormField
              label="Second Name"
              name="secondName"
              type="text"
              placeholder="Second Name"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Date of Birth"
              name="birth_date"
              type="date"
              required
            />
            <FormField
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              placeholder="+998901234567"
            />
          </div>

          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="example@mail.com"
          />

          <FormField
            label="Hospital"
            name="hospital"
            type="select"
            options={customHospitals}
            required
          />

          <FormField
            label="Specialization"
            name="specialization"
            type="text"
            placeholder="e.g. Oncologist"
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
              required
            />

            <FormField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              required
            />
          </div>
          <SubmitButton
            text={`${loading ? "submitting..." : "Sign Up"}`}
            disabled={loading}
          />
        </form>
        <SignUpFooter />
      </div>
    </div>
  );
};

export default DoctorForm;
