import React from 'react';
import Heading from './Heading'; 
import FormField from './FormField';
import SubmitButton from "./SubmitButton"
import SignUpFooter from "./SignUpFooter"
import { hospitals } from '../lib/utils';

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
          <SubmitButton />
        </form>
        <SignUpFooter />
      </div>
    </div>
  );
};

export default DoctorForm;
