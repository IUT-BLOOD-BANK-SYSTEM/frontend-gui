import React, { useState, useEffect } from "react";
import SubmitButton from "../reusable/SubmitButton";
import useGetUser from "../../hooks/useGetUser";
import useGetBloods from "../../hooks/useGetBloods";
import FormField from "../reusable/FormField";
import { toast } from "sonner";

const UserProfile = () => {
  const user = useGetUser("get_by_id_user");
  const { bloods } = useGetBloods();
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    address: "",
    diseases: "",
    blood_type_id: "",
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
        address: user.address || "",
        diseases: user.diseases || "",
        blood_type_id: user.blood_type?.id || "",
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
      toast.error("Passwords do not match");
      return;
    }

    const sendingData = {
      id: user.id,
      passport_number: user.passport_number,
      first_name: formData.firstName,
      second_name: formData.secondName,
      date_of_birth: formData.dateOfBirth,
      phone_number: formData.phoneNumber,
      email: formData.email,
      address: formData.address,
      diseases: formData.diseases,
      blood_type_id: formData.blood_type_id,
      password: formData.newPassword || user.password,
    };

    window.electron.sendTCPMessage({
      type: "update_user",
      payload: sendingData,
    });

    window.electron.onTCPMessage((response) => {
      if (response.type !== "update_user") return;
      if (response.status === "success") {
        toast.success("Profile updated successfully");
      } else {
        toast.error("Failed to update profile");
      }
    });
  };

  return (
    <div>
      <div className="w-3/4 px-10 mx-auto">
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

          <div className="grid grid-cols-2 gap-5 my-3">
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
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border border-white w-full h-10 rounded-lg text-black p-3"
              />
            </div>
          </div>

          <h1 className="font-semibold text-xl my-4">Medical Informations</h1>

          <div className="flex items-center gap-5">
            <FormField
              name={"bloodType"}
              label={"Blood type"}
              bgColor={"bg-white "}
              textColor={"text-black"}
              labelColor={"text-white"}
              type="select"
              options={bloods}
              defaultValue={formData.blood_type_id}
              handleChange={handleChange}
            />
            <div className="flex w-full flex-col gap-1 my-3">
              <label htmlFor="diseases" className="text-sm font-medium">
                Diseases
              </label>
              <input
                type="text"
                id="diseases"
                name="diseases"
                value={formData.diseases}
                onChange={handleChange}
                className="border border-white w-full h-10 rounded-lg text-black p-3"
              />
            </div>
          </div>

          <h1 className="font-semibold text-xl my-4">Change Password</h1>

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
            />
          </div>

          <SubmitButton text={"Save Changes"} disabled={!isChanged} />
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
