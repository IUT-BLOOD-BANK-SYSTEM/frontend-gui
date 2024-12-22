import React, { useState } from "react";
// import SubmitButton from "../reusable/SubmitButton";
import TableData from "../reusable/TableData";
import UserHistoryAcception from "./UserHistoryAcception";
import useGetUserHistory from "../../hooks/useGetUserHistory";
import { Button } from "../ui/button";

const columnData = [
  { label: "Date", key: "donation_date" },
  { label: "Status", key: "status" },
  { label: "Hospital Name", key: `hospital[name]` },
  { label: "Quantity", key: "quantity" },
];
// const rowData = [
//   {
//     id: 1,
//     date: "28.10.2024",
//     status: "Pending",
//     hospitalName: "Haemalab-#1",
//     doctorName: "Dr. Abdul Raheem",
//   },
//   {
//     id: 2,
//     date: "28.10.2024",
//     status: "Successful",
//     hospitalName: "Haemalab-#26",
//     doctorName: "Dr. Abdul Raheem",
//   },
//   {
//     id: 3,
//     date: "28.10.2024",
//     status: "Successful",
//     hospitalName: "Haemalab-#3",
//     doctorName: "Dr. Abdul Raheem",
//   },
//   {
//     id: 4,
//     date: "28.10.2024",
//     status: "Successful",
//     hospitalName: "LabLAB",
//     doctorName: "Dr. Abdul Raheem",
//   },
//   {
//     id: 5,
//     date: "28.10.2024",
//     status: "Successful",
//     hospitalName: "DoctorMim",
//     doctorName: "Dr. Abdul Raheem",
//   },
// ];

const UserHistoryDonation = () => {
const {donationHistory}=useGetUserHistory();
console.log(donationHistory)

  const [activePage, setActivePage] = useState("donation");

  const handleClick = (page) => {
    setActivePage(page);
  };

  console.log(activePage)

  return (
    <div className="flex flex-col gap-6">
      <div className="w-1/2">
        <div className="flex gap-5">
 
        <Button
         className={`${activePage === "donation" ? "bg-secondary hover:bg-red-500" : "bg-transparent border-solid border-2 hover:bg-white hover:text-black"} transition-colors duration-200`}
         onClick={() => handleClick("donation")}
        >
        Donation
        </Button>
        <Button
         className={`${activePage === "accepted" ? "bg-secondary hover:bg-red-500" : "bg-transparent border-solid border-2 hover:bg-white hover:text-black"} transition-colors duration-200`}
         onClick={() => handleClick("accepted")}
        >
        Accepted
        </Button>

        </div>
      </div>
      {activePage === "donation" ? (
        <TableData
          columns={columnData}
          rows={donationHistory}
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
