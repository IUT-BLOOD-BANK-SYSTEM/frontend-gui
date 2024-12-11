import banner from "../../assets/banner.svg";
import TableData from "../reusable/TableData";
import SeeMoreButton from "../reusable/SeeMoreButton";
import { Link } from "react-router-dom";

const columnData = [
  { label: "Date", key: "date" },
  { label: "Status", key: "status" },
  { label: "Blood type", key: "bloodType" },
  { label: "Amount", key: "amount" },
  { label: "Patient Name", key: "patientName" },
  { label: "Passport ID", key: "passportID" },
];
const rowData = [
  {
    date: "10.28.2024",
    status: "Approved",
    bloodType: "A+",
    amount: "350ml",
    patientName: "Son Heung Min",
    passportID: "AA090342",
  },
  {
    date: "10.28.2024",
    status: "Approved",
    bloodType: "A+",
    amount: "350ml",
    patientName: "Son Heung Min",
    passportID: "AA090342",
  },
  {
    date: "10.28.2024",
    status: "Rejected",
    bloodType: "A+",
    amount: "350ml",
    patientName: "Son Heung Min",
    passportID: "AA090342",
  },
  {
    date: "10.28.2024",
    status: "Rejected",
    bloodType: "A+",
    amount: "350ml",
    patientName: "Son Heung Min",
    passportID: "AA090342",
  },
  {
    date: "10.28.2024",
    status: "Approved",
    bloodType: "A+",
    amount: "350ml",
    patientName: "Son Heung Min",
    passportID: "AA090342",
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
        <TableData
          columns={columnData}
          rows={rowData}
          hasFilter={true}
          filterColumnKey="status"
        />
        <Link to="/dashboard/history">
          <SeeMoreButton />
        </Link>
      </div>
    </section>
  );
};

export default DoctorDashboard;
