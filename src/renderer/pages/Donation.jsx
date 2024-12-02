import { CirclePlus } from "lucide-react";
import UpcomingAppointmentsCard from "../components/reusable/UpcomingAppointmentsCard";
import { Link } from "react-router-dom";
import SubmitButton from "../components/reusable/SubmitButton";
import FormField from "../components/reusable/FormField";
import { hospitals } from "../lib/utils";

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
  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Upcoming appointments</h1>
        <div className="grid grid-cols-2 gap-5">
          {appointmentsData.map((data) => (
            <UpcomingAppointmentsCard data={data} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Schedule Appointment</h1>

        <div className="grid grid-cols-2 gap-5 w-3/4">
          <div className="flex flex-col gap-2">
            <label for="dateAppointment" className="text-sm font-medium">
              Date of Appointment*
            </label>
            <input
              className="border border-white w-full h-12 flex justify-center items-center rounded-lg text-black p-3"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label for="dateAppointment" className="text-sm font-medium">
              Time of Appointment*
            </label>
            <input
              className="border border-white w-full h-12 flex justify-center items-center rounded-lg text-black p-3"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 w-3/4">
          <FormField
            label="Hospital*"
            type="select"
            name="hospital"
            options={hospitals}
            required
          />
          <SubmitButton text={"Submit"} />
        </div>
      </div>
    </section>
  );
};

export default Donation;
