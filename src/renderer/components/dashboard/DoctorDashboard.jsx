import banner from "../../assets/banner.svg";
import UpcomingAppointmentsCard from "../reusable/UpcomingAppointmentsCard";
import { Button } from "../ui/button";
import { bloodRequestData } from "../../lib/utils";
import TableData from "../reusable/TableData";
import SeeMoreButton from "../reusable/SeeMoreButton";
import { Link } from "react-router-dom";

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

const columnData = [
  { label: "Date", key: "date" },
  { label: "Time", key: "time" },
  { label: "Status", key: "status" },
  { label: "Blood type", key: "bloodType" },
  { label: "Patient Name", key: "patientName" },
];
const rowData = [
  {
    id: 1,
    date: "10.28.2024",
    time: "13:00",
    status: "Approved",
    bloodType: "A+",
    patientName: "Son Heung Min",
  },
  {
    id: 2,
    date: "10.28.2024",
    time: "13:00",
    status: "Approved",
    bloodType: "A+",
    patientName: "Son Heung Min",
  },
  {
    id: 3,
    date: "10.28.2024",
    time: "13:00",
    status: "Approved",
    bloodType: "A+",
    patientName: "Son Heung Min",
  },
  {
    id: 4,
    date: "10.28.2024",
    time: "13:00",
    status: "Approved",
    bloodType: "A+",
    patientName: "Son Heung Min",
  },
  {
    id: 5,
    date: "10.28.2024",
    time: "13:00",
    status: "Approved",
    bloodType: "A+",
    patientName: "Son Heung Min",
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
            <UpcomingAppointmentsCard data={data} />
          ))}
        </div>
        <Link to="/dashboard/donation">
          <SeeMoreButton />
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Request history</h1>
        <TableData columns={columnData} rows={rowData} />
        <Link to="/dashboard/history">
          <SeeMoreButton />
        </Link>
      </div>
    </section>
  );
};

export default DoctorDashboard;
