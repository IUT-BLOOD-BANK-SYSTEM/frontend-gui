import banner from "../../assets/banner.svg";
import UpcomingAppointmentsCard from "../reusable/UpcomingAppointmentsCard";
import { Button } from "../ui/button";
import { bloodRequestData } from "../../lib/utils";
import TableData from "../reusable/TableData";

const appointmentsData = [
  {
    id: 1,
    date: 28,
    time: "15:00",
    status: "Approved",
    month: "October",
    patient: "John Watson",
  },

  {
    id: 2,
    date: 28,
    time: "15:00",
    status: "Approved",
    month: "October",
    patient: "John Watson",
  },

  {
    id: 3,
    date: 28,
    time: "15:00",
    status: "Approved",
    month: "October",
    patient: "John Watson",
  },
];

const DoctorDashboard = () => {
  return (
    <section className="flex flex-col gap-16">
      <img
        src={banner}
        alt="banner"
        className="w-full h-[240px] object-cover rounded-lg"
      />

      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Upcoming appointments</h1>
        <div className="grid grid-cols-2 gap-5">
          {appointmentsData.map((data) => (
            <UpcomingAppointmentsCard
              patient={data.patient}
              key={data.id}
              time={data.time}
              status={data.status}
              date={data.date}
              month={data.month}
            />
          ))}
        </div>
        <Button
          className="bg-transparent border border-white h-11 text-[17px]"
          variant="ghost"
        >
          See more
        </Button>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Request history</h1>
        <TableData
          columnHead3="Status"
          columnHead4="Blood type"
          columnHead5="Patient name"
        />
        <Button
          className="bg-transparent border border-white h-11 text-[17px]"
          variant="ghost"
        >
          See more
        </Button>
      </div>
    </section>
  );
};

export default DoctorDashboard;
