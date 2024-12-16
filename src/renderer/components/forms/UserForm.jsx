import React, { useRef, useState } from "react";
import FormField from "../reusable/FormField";
import SubmitButton from "../reusable/SubmitButton";
import SignUpFooter from "../reusable/SignUpFooter";
import Heading from "../reusable/Heading";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useGetBloods from "../../hooks/useGetBloods";

const UserForm = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { bloods, isLoading } = useGetBloods();

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
        address: data.address,
        blood_type_id: data.bloodType,
        passport_number: data.passportNumber,
        diseases: data.diseases,
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
          JSON.stringify({ role: "user", token: response.payload.token })
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
        <form ref={formRef} className="space-y-3" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="First Name"
              name="firstName"
              placeholder="e.g. Your Name"
              required
            />
            <FormField
              label="Second Name"
              name="secondName"
              placeholder="e.g. Last Name"
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
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="example@mail.com"
              required
            />
            <FormField
              label="Passport Number"
              name="passportNumber"
              type="text"
              placeholder="AA1234567"
              required
            />
          </div>
          <FormField
            label="Address"
            name="address"
            placeholder="e.g. Your Address"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              type="select"
              label="Blood Type"
              name="bloodType"
              options={bloods}
              required
            />
            <FormField
              label="Diseases"
              name="diseases"
              placeholder="Leukaemia"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-3">
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

export default UserForm;
