import React from "react";
import Heading from "../reusable/Heading";
import FormField from "../reusable/FormField";
import SubmitButton from "../reusable/SubmitButton";
import SignUpFooter from "../reusable/SignUpFooter";
import { hospitals } from "../../lib/utils";
import { Link } from "react-router-dom";

const DoctorForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-1/2">
        <Heading />
        <form className="space-y-3">
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
              name="phone"
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
            options={hospitals}
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
          <Link to="/dashboard">
            <SubmitButton />
          </Link>
        </form>
        <SignUpFooter />
      </div>
    </div>
  );
};

export default DoctorForm;
