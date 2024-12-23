import SubmitButton from "../components/reusable/SubmitButton";
import FormField from "../components/reusable/FormField";
import { useRef, useState, useEffect } from "react";
import useGetHospital from "../hooks/useGetHospital";
import useGetBloods from "../hooks/useGetBloods";
import { toast } from "sonner";
import BloodInfoCard from "../components/reusable/BloodInfoCard";

const RequestBlood = () => {
  const { customHospitals } = useGetHospital();
  console.log(customHospitals);

  const { bloods } = useGetBloods();
  const formRef = useRef(null);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    if (customHospitals?.length > 0) {
      setSelectedHospital(customHospitals[0].value);
    }
  }, [customHospitals]);

  const [loading, setLoading] = useState(false);

  console.log(selectedHospital);

  const { user_id } = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      type: "create_blood_request",
      payload: {
        doctor_id: user_id,
        hospital_id: selectedHospital,
        blood_type_id: data.bloodType,
        user_passport_number: data.passportId,
        user_name: data.patientName,
        quantity: parseInt(data.amount),
      },
    };

    window.electron.sendTCPMessage(payload);
    window.electron.onTCPMessage((response) => {
      console.log(response);

      if (response.type !== "create_blood_request") return;
      if (response.status === "success") {
        toast.success("Request sent!");
        formRef.current.reset();
      } else {
        toast.error(`Request error: ${response.message}`);
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
          handleChange={(e) => {
            setSelectedHospital(e.target.value);
          }}
        />
      </div>
      <div className="w-[673px] mx-auto">
        <div>
          <h1 className="font-semibold text-xl mb-8">Blood available:</h1>
          <BloodInfoCard hospitalId={selectedHospital} />
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
                name={"bloodType"}
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
                name={"amount"}
                label={"Amount of blood (ml)"}
                bgColor={"bg-white "}
                textColor={"text-black"}
                labelColor={"text-white"}
                type="number"
                required
              />
            </div>
          </div>

          <div className="flex gap-3 w-full">
            <div className="flex flex-col gap-2 w-1/2">
              <FormField
                name={"passportId"}
                label={"Passport ID of patient"}
                bgColor={"bg-white "}
                textColor={"text-black"}
                labelColor={"text-white"}
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <FormField
                name={"patientName"}
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
