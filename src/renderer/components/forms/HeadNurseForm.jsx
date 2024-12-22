import React, { useRef, useState } from "react";
import FormField from "../reusable/FormField";
import Heading from "../reusable/Heading";
import SignUpFooter from "../reusable/SignUpFooter";
import SubmitButton from "../reusable/SubmitButton";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useGetHospital from "../../hooks/useGetHospital";

const HeadNurseForm = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { customHospitals } = useGetHospital();

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
      type: "head_nurse_register",
      payload: {
        first_name: data.firstName,
        second_name: data.secondName,
        date_of_birth: data.birth_date.toString(),
        phone_number: data.phoneNumber,
        email: data.email,
        hospital_id: data.hospital,
        password: data.password,
      },
    };

    window.electron.sendTCPMessage(payload);
    window.electron.onTCPMessage((response) => {
      console.log(response);
      if (response.type !== "head_nurse_register") return;
      if (response.status === "success") {
        toast.success("Registration successful!");
        navigate("/");
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
        <form ref={formRef} className="space-y-3" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="First Name"
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
            <FormField
              label="Second Name"
              type="text"
              name="secondName"
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
              type="tel"
              name="phoneNumber"
              placeholder="+998901234567"
              required
            />
          </div>
          <FormField
            label="Email"
            type="email"
            name="email"
            placeholder="example@mail.com"
            required
          />
          <FormField
            label="Hospital"
            type="select"
            name="hospital"
            options={customHospitals}
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password"
              required
            />
            <FormField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
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

export default HeadNurseForm;
