import React, { useEffect, useRef, useState } from "react";
import SubmitButton from "../reusable/SubmitButton";
import useGetUser from "../../hooks/useGetUser";
import { toast } from "sonner";

const DoctorProfile = () => {
  const user = useGetUser("get_by_id_doctor");
  console.log("Dcotor:", user);
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    specialization: "",
    hospital: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [isChanged, setIsChanged] = useState(false);
  const [originalData, setOriginalData] = useState(null);

  useEffect(() => {
    if (user) {
      const initialData = {
        firstName: user.first_name || "",
        secondName: user.second_name || "",
        dateOfBirth: user.date_of_birth || "",
        phoneNumber: user.phone_number || "",
        email: user.email || "",
        specialization: user.specialization || "",
        hospital: user.hospital?.name || "",
        newPassword: "",
        confirmNewPassword: "",
      };
      setFormData(initialData);
      setOriginalData(initialData);
    }
  }, [user]);

  useEffect(() => {
    if (originalData) {
      const hasChanges = Object.keys(formData).some(
        (key) => formData[key] !== originalData[key]
      );
      setIsChanged(hasChanges);
    }
  }, [formData, originalData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmNewPassword) {
      toast("Passwords do not match");
      return;
    }

    const payload = {
      type: "update_doctor",
      payload: {
        first_name: formData.firstName,
        second_name: formData.secondName,
        date_of_birth: formData.dateOfBirth.toString(),
        phone_number: formData.phoneNumber,
        email: formData.email,
        specialization: formData.specialization,
        password: formData.newPassword || user.password,
        id: user.id,
        hospital_id: user.hospital.id,
      },
    };

    window.electron.sendTCPMessage(payload);
    window.electron.onTCPMessage((response) => {
      console.log(response);

      if (response.type !== "update_doctor") return;
      if (response.status === "success") {
        toast.success("Update successful!");
      } else {
        toast.error(`Update failed: ${response.message}`);
      }
    });
  };

  return (
    <div>
      <div className="w-3/4 px-10">
        <h1 className="font-semibold text-xl">Personal Information</h1>

        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5 my-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name*
              </label>
              <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
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
                value={formData.secondName}
                onChange={handleChange}
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
                value={formData.dateOfBirth}
                onChange={handleChange}
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
                value={formData.phoneNumber}
                onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
              className="border border-white w-full h-10 rounded-lg text-black p-3"
            />
          </div>

          <div className="flex flex-col gap-1 my-3">
            <label htmlFor="address" className="text-sm font-medium">
              Specialization
            </label>
            <input
              type="text"
              id="specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              className="border border-white w-full h-10 rounded-lg text-black p-3"
            />
          </div>

          <div className="flex flex-col gap-1 my-3">
            <label htmlFor="address" className="text-sm font-medium">
              Hospital
            </label>
            <input
              type="text"
              id="hospital"
              name="hospital"
              value={formData.hospital}
              disabled
              onChange={handleChange}
              className="border border-white bg-white w-full h-10 rounded-lg text-black p-3"
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
              value={formData.newPassword}
              onChange={handleChange}
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
              value={formData.confirmNewPassword}
              onChange={handleChange}
              className="border border-white w-full h-10 rounded-lg text-black p-3"
              required
            />
          </div>

          <SubmitButton text={"Save Changes"} disabled={!isChanged} />
        </form>
      </div>
    </div>
  );
};

export default DoctorProfile;
