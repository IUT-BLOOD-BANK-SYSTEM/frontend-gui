import React from "react";
import SubmitButton from "../reusable/SubmitButton";

const UserProfile = () => {
  return (
    <div>
      <div className="w-3/4 px-10">
        <h1 className="font-semibold text-xl">Personal Information</h1>

        <form className="mt-5">
          <div className="grid grid-cols-2 gap-5 my-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name*
              </label>
              <input
                id="firstName"
                name="firstName"
                className="border border-white w-full h-10 rounded-lg text-black p-3"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="secondName" className="text-sm font-medium">
                Second Name*
              </label>
              <input
                id="secondName"
                name="secondName"
                className="border border-white w-full h-10 rounded-lg text-black p-3"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 my-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="dateOfBirth" className="text-sm font-medium">
                Date of Birth*
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="border border-white w-full h-10 rounded-lg text-black p-3"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="phoneNumber" className="text-sm font-medium">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                className="border border-white w-full h-10 rounded-lg text-black p-3"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 my-3">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-white w-full h-10 rounded-lg text-black p-3"
            />
          </div>

          <div className="flex flex-col gap-1 my-3">
            <label htmlFor="address" className="text-sm font-medium">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="border border-white w-full h-10 rounded-lg text-black p-3"
            />
          </div>

          <h1 className="font-semibold text-xl my-7">Change Password</h1>

          <div className="flex flex-col gap-1 my-3">
            <label htmlFor="newPassword" className="text-sm font-medium">
              New Password*
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className="border border-white w-full h-10 rounded-lg text-black p-3"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="confirmNewPassword" className="text-sm font-medium">
              Confirm New Password*
            </label>
            <input
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              className="border border-white w-full h-10 rounded-lg text-black p-3"
              required
            />
          </div>

          <SubmitButton text={"Save Changes"} />
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
