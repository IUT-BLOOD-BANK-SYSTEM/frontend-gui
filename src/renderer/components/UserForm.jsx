import React from 'react';
import FormField from './FormField';
import { bloodTypes } from '../lib/utils';
import SubmitButton from './SubmitButton';
import SignUpFooter from './SignUpFooter';
import Heading from "./Heading"

const UserForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-1/2">
        <Heading />
        <form className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <FormField label="First Name" name="firstName" placeholder="e.g. Your Name" required />
            <FormField label="Second Name" name="secondName" placeholder="e.g. Last Name" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Date of Birth" name="birth_date" type="date" required />
            <FormField label="Phone Number" name="phoneNumber" type="tel" placeholder="+998901234567" required />
          </div>
          <FormField label="Email" name="email" type="email" placeholder="example@mail.com" required />
          <FormField label="Address" name="address" placeholder="e.g. Your Address" />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              type='select'
              label="Blood Type"
              name="bloodType"
              options={bloodTypes}
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
          <FormField label="Password" name="password" type="password" placeholder="Enter password" required />
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

export default UserForm;
