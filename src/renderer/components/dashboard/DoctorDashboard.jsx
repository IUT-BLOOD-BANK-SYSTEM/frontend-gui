import banner from "../../assets/banner.svg";
import TableData from "../reusable/TableData";
import SeeMoreButton from "../reusable/SeeMoreButton";
import { Link } from "react-router-dom";

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
