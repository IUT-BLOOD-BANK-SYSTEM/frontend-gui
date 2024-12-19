import React from "react";
import UpcomingAppointmentsCard from "../components/reusable/UpcomingAppointmentsCard";
import SubmitButton from "../components/reusable/SubmitButton";
import FormField from "../components/reusable/FormField";
import useGetHospital from "../hooks/useGetHospital";
import { toast } from "sonner";
const appointmentsData = [
  {
    id: 1,
    date: 28,
    time: "15:00",
    status: "Approved",
    month: "October",
  },
  {
    id: 2,
    date: 28,
    time: "15:00",
    status: "Approved",
    month: "October",
  },
  {
    id: 3,
    date: 28,
    time: "15:00",
    status: "Approved",
    month: "October",
  },
];

const Donation = () => {
  const [loading, setLoading] = React.useState(false);
  const formRef = React.useRef(null);
 const {customHospitals} = useGetHospital();
 const {user_id} = JSON.parse(localStorage.getItem("user"));

 console.log(user_id)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    const appointmentDate = new Date(`${data.dateOfAppointment}T${data.timeOfAppointment}`);

    const payload = {
      type: "create_appointment",
      payload: {
        donor_id: user_id,
        appointment_date: appointmentDate.toISOString(),
        hospital_id: data.hospital
      },
    };
    window.electron.sendTCPMessage(payload);
    window.electron.onTCPMessage((response) => {
      if (response.type !== "create_appointment") return;

      if (response.status === "success") 
      {
        toast.success("Appointment Succesufully Created");0
        formRef.current.reset();
      } else 
      {
        toast.error( `Failed to create appointment :): ${response.message}`);
      }

      setLoading(false);
    });
  };

  console.log(customHospitals)

  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Upcoming appointments</h1>
        <div className="grid grid-cols-2 gap-5">
          {appointmentsData.map((data) => (
            <UpcomingAppointmentsCard key={data.id} data={data} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Schedule Appointment</h1>

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5 w-3/4">
            <div className="flex flex-col gap-2">
              <label htmlFor="dateofappointment" className="text-sm font-medium">
                Date of Appointment*
              </label>
              <FormField
                id="dateofappointment"
                name="dateOfAppointment"
                type="date"
                required
                className="border border-white w-full h-12 flex justify-center items-center rounded-lg text-black p-3"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="timeofappointment" className="text-sm font-medium">
                Time of Appointment*
              </label>
              <FormField
                id="timeofappointment"
                name="timeOfAppointment"
                type="time"
                required
                className="border border-white w-full h-12 flex justify-center items-center rounded-lg text-black p-3"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 w-3/4">
            <FormField
              label="Hospital*"
              type="select"
              name="hospital"
              options={customHospitals}
              required
            />
            <SubmitButton text={loading ? "Submitting..." : "Submit"} disabled={loading} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Donation;