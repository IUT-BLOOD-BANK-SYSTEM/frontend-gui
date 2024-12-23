import React from "react";
import UpcomingAppointmentsCard from "../components/reusable/UpcomingAppointmentsCard";
import SubmitButton from "../components/reusable/SubmitButton";
import FormField from "../components/reusable/FormField";
import useGetHospital from "../hooks/useGetHospital";
import useGetUpcomingAppointments from "../hooks/useGetUpcomingAppointments";
import { toast } from "sonner";

const Donation = () => {
  const [loading, setLoading] = React.useState(false);
  const formRef = React.useRef(null);
  const { customHospitals } = useGetHospital();
  const { appointments, fetchAppointments } = useGetUpcomingAppointments();
  const { user_id } = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    const [year, month, day] = data.dateOfAppointment.split("-").map(Number);
    const [hours, minutes] = data.timeOfAppointment.split(":").map(Number);

    const appointmentDate = new Date(
      Date.UTC(year, month - 1, day, hours, minutes)
    );

    const payload = {
      type: "create_appointment",
      payload: {
        donor_id: user_id,
        appointment_date: appointmentDate.toISOString(),
        hospital_id: data.hospital,
      },
    };

    window.electron.sendTCPMessage(payload);
    window.electron.onTCPMessage((response) => {
      if (response.type !== "create_appointment") return;

      if (response.status === "success") {
        toast.success("Appointment Successfully Created");
        formRef.current.reset();
        fetchAppointments(); // Refresh appointments
      } else {
        toast.error(`Failed to create appointment: ${response.message}`);
      }
      setLoading(false);
    });
  };

  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Upcoming appointments</h1>
        <div className="grid grid-cols-3 gap-5">
          {appointments.length > 0 ? (
            appointments.map((data) => (
              <UpcomingAppointmentsCard key={data.id} data={data} />
            ))
          ) : (
            <p>No upcoming appointments.</p>
          )}
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

          <div className="flex flex-col gap-3 w-3/4 mt-4">
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
