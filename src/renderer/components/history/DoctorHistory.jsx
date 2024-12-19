import React, { useState } from "react";
import TableData from "../reusable/TableData";
import useGetDoctorHistory from "../../hooks/useGetDoctorHistory";

const columnData = [
  { label: "Date", key: "date" },
  { label: "Hospital Name", key: "hospitalName" },
  { label: "Status", key: "status" },
  { label: "Blood Type", key: "bloodType" },
  { label: "Amount", key: "amount" },
  { label: "Patient Name", key: "patientName" },
  { label: "Passport ID", key: "passportID" },
];



const DoctorHistory = () => {
  const {requestHistory}=useGetDoctorHistory()
  console.log(requestHistory)

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold mb-4">Recent notifications</h2>
      <TableData
        columns={columnData}
        rows={requestHistory}
        hasFilter={true}
        filterColumnKey="status"
      />
    </div>
  );
};

export default DoctorHistory;
