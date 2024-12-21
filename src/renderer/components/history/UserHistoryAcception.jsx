import useGetUserHistory from "../../hooks/useGetUserHistory";
import TableData from "../reusable/TableData";
import UserHistoryDonation from "./UserHistoryDonation";
import { useState } from "react";

const columnData = [
  { label: "Date", key: "acceptance_date" },
  { label: "Status", key: "status" },
  { label: "Hospital Name", key: `hospital[name]` },
  { label: "Doctor Name", key: "doctorName" },
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

const UserHistoryAcception = () => {

  const {acceptanceHistory}=useGetUserHistory()
  console.log(acceptanceHistory)
  return (
    <div className="flex flex-col gap-6">
      <TableData
        columns={columnData}
        rows={acceptanceHistory} 
        hasFilter={true}
        filterColumnKey="status"
      />
    </div>
  );
};

export default UserHistoryAcception;
