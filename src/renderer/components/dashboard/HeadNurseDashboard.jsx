import { bloodRequestData, bloodTypes } from "../../lib/utils";
import { Button } from "../ui/button";
import banner from "../../assets/banner.svg";
import BloodInfoCard from "../reusable/BloodInfoCard";
import TableData from "../reusable/TableData";
import { Link } from "react-router-dom";
import SeeMoreButton from "../reusable/SeeMoreButton";

const columnData = [
  { label: "Date", key: "date" },
  { label: "Time", key: "time" },
  { label: "Blood type", key: "bloodType" },
  { label: "Amount", key: "amount" },
  { label: "Doctor Name", key: "doctorName" },
];
const rowData = [
  {
    id: 1,
    date: "10.28.2024",
    time: "13:00",
    bloodType: "A+",
    amount: "450ml",
    doctorName: "Dr. Dre",
  },
  {
    id: 2,
    date: "10.28.2024",
    time: "13:00",
    bloodType: "A+",
    amount: "450ml",
    doctorName: "Dr. Dre",
  },
  {
    id: 3,
    date: "10.28.2024",
    time: "13:00",
    bloodType: "A+",
    amount: "450ml",
    doctorName: "Dr. Dre",
  },
  {
    id: 4,
    date: "10.28.2024",
    time: "13:00",
    bloodType: "A+",
    amount: "450ml",
    doctorName: "Dr. Dre",
  },
  {
    id: 5,
    date: "10.28.2024",
    time: "13:00",
    bloodType: "A+",
    amount: "450ml",
    doctorName: "Dr. Dre",
  },
];

const HeadNurseDashboard = () => {
  return (
    <section className="flex flex-col gap-16">
      <img
        src={banner}
        alt="banner"
        className="w-full h-[240px] object-cover rounded-lg"
      />

      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Blood available</h1>
        <div className="grid grid-cols-4 gap-5">
          {bloodTypes.map((data, index) => (
            <BloodInfoCard
              bloodType={data.value}
              bloodAmount={12.5}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Blood request history</h1>
        <TableData columns={columnData} rows={rowData} />
        <Link to="/dashboard/history">
          <SeeMoreButton />
        </Link>
      </div>
    </section>
  );
};

export default HeadNurseDashboard;
