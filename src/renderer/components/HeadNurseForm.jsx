import React from 'react';
import FormField from './FormField';
import Heading from "./Heading"
import SignUpFooter from './SignUpFooter';
import SubmitButton from './SubmitButton';
import { hospitals } from '../lib/utils';

const HeadNurseForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-1/2">
        <Heading />
        <form className="space-y-3">
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
              type="date"
              name="dob"
              required
            />
            <FormField
              label="Phone Number"
              type="tel"
              name="phone"
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
            options={hospitals}
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
          
          <SubmitButton />
        </form>
        <SignUpFooter />
      </div>
    </div>
  );
};

export default HeadNurseForm;
