import React, { useState } from "react";
import SubmitButton from "../reusable/SubmitButton";
import TableData from "../reusable/TableData";
import UserHistoryAcception from "./UserHistoryAcception";

const columnData = [
  { label: "Date", key: "date" },
  { label: "Status", key: "status" },
  { label: "Hospital Name", key: "hospitalName" },
  { label: "Doctor Name", key: "doctorName" },
];
const rowData = [
  {
    id: 1,
    date: "28.10.2024",
    status: "Pending",
    hospitalName: "Haemalab-#1",
    doctorName: "Dr. Abdul Raheem",
  },
  {
    id: 2,
    date: "28.10.2024",
    status: "Successful",
    hospitalName: "Haemalab-#26",
    doctorName: "Dr. Abdul Raheem",
  },
  {
    id: 3,
    date: "28.10.2024",
    status: "Successful",
    hospitalName: "Haemalab-#3",
    doctorName: "Dr. Abdul Raheem",
  },
  {
    id: 4,
    date: "28.10.2024",
    status: "Successful",
    hospitalName: "LabLAB",
    doctorName: "Dr. Abdul Raheem",
  },
  {
    id: 5,
    date: "28.10.2024",
    status: "Successful",
    hospitalName: "DoctorMim",
    doctorName: "Dr. Abdul Raheem",
  },
];

const UserHistoryDonation = () => {
  const [activePage, setActivePage] = useState("donation");

  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="w-1/2">
        <div className="flex gap-5">
          <SubmitButton
            variant={activePage === "donation" ? "solid" : "outline"}
            text={"Donation"}
            onClick={() => handleClick("donation")}
          />

          <SubmitButton
            variant={activePage === "accepted" ? "solid" : "outline"}
            text="Acception"
            onClick={() => handleClick("accepted")}
          />
        </div>
      </div>
      {activePage === "donation" ? (
        <TableData
          columns={columnData}
          rows={rowData}
          hasFilter={true}
          filterColumnKey="status"
        />
      ) : (
        <UserHistoryAcception />
      )}
    </div>
  );
};

export default UserHistoryDonation;
