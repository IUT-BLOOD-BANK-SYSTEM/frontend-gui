import BloodInfoCard from "../components/reusable/BloodInfoCard";
import SubmitButton from "../components/reusable/SubmitButton";
import FormField from "../components/reusable/FormField";
import { hospitals } from "../lib/utils";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetHospital from "../hooks/useGetHospital";
import useGetBloods from "../hooks/useGetBloods";
import useGetBloodInventory from "../hooks/useGetBloodInventory";

const bloodData = [
  { bloodType: "A+", bloodAmount: "12.5 L" },
  { bloodType: "A-", bloodAmount: "0.5 L" },
  { bloodType: "AB+", bloodAmount: "16.0 L" },
  { bloodType: "AB-", bloodAmount: "14.5 L" },
  { bloodType: "O+", bloodAmount: "2.5 L" },
  { bloodType: "O-", bloodAmount: "2.5 L" },
  { bloodType: "B+", bloodAmount: "2.5 L" },
  { bloodType: "B-", bloodAmount: "2.5 L" },
];

const RequestBlood = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { customHospitals } = useGetHospital();
  const { bloods } = useGetBloods();
  const { bloodInventory } = useGetBloodInventory();

  console.log(bloodInventory);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      type: "create_blood_request",
      payload: {
        first_name: data.firstName,
        second_name: data.secondName,
        date_of_birth: data.birth_date.toString(),
        phone_number: data.phoneNumber,
        email: data.email,
        hospital_id: data.hospital,
        specialization: data.specialization,
        password: data.password,
      },
    };

    window.electron.sendTCPMessage(payload);
    window.electron.onTCPMessage((response) => {
      if (response.type !== "create_doctor") return;
      if (response.status === "success") {
        toast.success("Registration successful!");
        localStorage.setItem(
          "user",
          JSON.stringify({ ...response.payload, role: "doctor" })
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
    <section className="flex flex-col gap-12 py-10">
      <div className="w-[673px] mx-auto">
        <FormField
          label="Select hospital to see available bloods"
          type="select"
          name="hospital"
          options={customHospitals}
        />
      </div>
      <div className="w-[673px] mx-auto">
        <div>
          <h1 className="font-semibold text-xl mb-8">Blood available:</h1>
          <div className="grid grid-cols-4 gap-5">
            {bloodInventory.map((item) => (
              <BloodInfoCard
                bloodType={item.blood_type.bloods_type}
                bloodAmount={item.quantity}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center ">
        <h1 className="font-semibold text-xl text-center">
          Please fill out this form
        </h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-3/4 flex flex-col gap-3"
        >
          <div className="flex gap-3 w-full">
            <div className="flex flex-col gap-2 w-1/2">
              <FormField
                label={"Blood type"}
                bgColor={"bg-white "}
                textColor={"text-black"}
                labelColor={"text-white"}
                type="select"
                options={bloods}
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <FormField
                label={"Amount of blood"}
                bgColor={"bg-white "}
                textColor={"text-black"}
                labelColor={"text-white"}
              />
            </div>
          </div>

          <div className="flex gap-3 w-full">
            <div className="flex flex-col gap-2 w-1/2">
              <FormField
                label={"Passport ID of patient"}
                bgColor={"bg-white "}
                textColor={"text-black"}
                labelColor={"text-white"}
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <FormField
                label={"Name of patient"}
                bgColor={"bg-white "}
                textColor={"text-black"}
                labelColor={"text-white"}
              />
            </div>
          </div>

          <SubmitButton
            text={`${loading ? "requesting..." : "Request"}`}
            disabled={loading}
          />
        </form>
      </div>
    </section>
  );
};

export default RequestBlood;
