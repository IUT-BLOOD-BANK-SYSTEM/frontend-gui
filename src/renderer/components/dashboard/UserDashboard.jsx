import React from "react";
import { CirclePlus } from "lucide-react";
import banner from "../../assets/banner.svg";
import UpcomingAppointmentsCard from "../reusable/UpcomingAppointmentsCard";
import MedicalInfoCard from "../reusable/MedicalInfoCard";
import { Link } from "react-router-dom";
import TableData from "../reusable/TableData";
import SeeMoreButton from "../reusable/SeeMoreButton";
import useGetUserHistory from "../../hooks/useGetUserHistory";

const columnData1 = [
  { label: "Date", key: "donation_date" },
  { label: "Status", key: "status" },
  { label: "Hospital Name", key: `hospital[name]` },
  { label: "Quantity", key: "quantity" },
];

const columnData2 = [
  { label: "Date", key: "acceptance_date" },
  { label: "Status", key: "status" },
  { label: "Hospital Name", key: `hospital[name]` },
  { label: "Doctor Name", key: "doctorName" },
];

const UserDashboard = () => {
  const { appointmentsData, donationHistory, acceptanceHistory } =
    useGetUserHistory();

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
          <Link
            to="/dashboard/donation"
            className="border border-white w-full h-36 flex justify-center items-center rounded-lg"
          >
            <div className="flex gap-3 items-center">
              {" "}
              <CirclePlus />{" "}
              <span className="font-semibold text-xl">Donate blood</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Medical information</h1>
        <MedicalInfoCard />
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Blood donation history</h1>
        <TableData columns={columnData1} rows={donationHistory} maxRows={5} />
        <Link to="/dashboard/history">
          <SeeMoreButton />
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Blood acception history</h1>
        <TableData columns={columnData2} rows={acceptanceHistory} maxRows={5} />
        <Link to="/dashboard/history">
          <SeeMoreButton />
        </Link>
      </div>
    </section>
  );
};

export default UserDashboard;
