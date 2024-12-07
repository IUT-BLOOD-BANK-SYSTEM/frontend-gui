import React from "react";
import SubmitButton from "../reusable/SubmitButton";

const HeadNurseProfile = () => {
  return (
    <div>
      <div className="w-3/4 px-10">
        <h1 className="font-semibold text-xl">Personal Information</h1>

        <div className="mt-5">
          <div className="grid grid-cols-2 gap-5 my-3">
            <div className="flex flex-col gap-1">
              <label for="firstName" className="text-sm font-medium">
                First Name*
              </label>
              <input
                className="border border-white w-full h-10  rounded-lg text-black p-3"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label for="secondName" className="text-sm font-medium">
                Second Name*
              </label>
              <input
                className="border border-white w-full h-10  rounded-lg text-black p-3"
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
                className="border border-white w-full h-10 rounded-lg text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-800"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label for="phoneNumber" className="text-sm font-medium">
                Phone number
              </label>
              <input className="border border-white w-full h-10  rounded-lg text-black p-3" />
            </div>
          </div>

          <div className="flex flex-col gap-1 my-3">
            <label for="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              className="border border-white w-full h-10 rounded-lg text-black p-3"
            />
          </div>

          <div className="flex flex-col gap-1 my-3">
            <label for="address" className="text-sm font-medium">
              Address
            </label>
            <input
              type="text"
              className="border border-white w-full h-10  rounded-lg text-black p-3"
            />
          </div>

          <h1 className="font-semibold text-xl my-7">Change password</h1>

          <div className="flex flex-col gap-1 my-3">
            <label for="newPassword" className="text-sm font-medium">
              New Password*
            </label>
            <input
              type="password"
              className="border border-white w-full h-10  rounded-lg text-black p-3"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label for="confirmNewPassword" className="text-sm font-medium">
              Confirm New Password*
            </label>
            <input
              type="password"
              className="border border-white w-full h-10 rounded-lg text-black p-3"
              required
            />
          </div>

          <SubmitButton text={"Save Changes"} />
        </div>
      </div>
    </div>
  );
};

export default HeadNurseProfile;
