import React from "react";
import TableData from "../reusable/TableData";
import useGetUserHistory from "../../hooks/useGetUserHistory";
import useGetDoctorHistory from "../../hooks/useGetDoctorHistory";

const columnData = [
  { label: "Date", key: "date" },
  { label: "Doctor's hospital", key: "doctorHospital" },
  { label: "Blood type", key: "bloodType" },
  { label: "Amount", key: "amount" },
  { label: "Doctor Name", key: "doctorName" },
  { label: "Patient's ID", key: "patientId" },
];

const columnData2 = [
  { label: "Date", key: "date" },
  { label: "Blood type", key: "bloodType" },
  { label: "Amount", key: "amount" },
  { label: "Donor's Passport ID", key: "donorPassportId" },
  { label: "Donor's name", key: "donorName" },
];

const HeadNurseHistory = () => {
  const {donationHistory} = useGetUserHistory()
  const {requestHistory} = useGetDoctorHistory()
  return (
    <>
      <div className="space-y-6">
        <h1 className="font-semibold text-xl">Blood Request History</h1>
        <TableData
          columns={columnData}
          rows={requestHistory}
          hasFilter={true}
          filterColumnKey="bloodType"
        />
      </div>
      <div className="space-y-6 mt-20">
        <h1 className="font-semibold text-xl">Added Bloods</h1>
        <TableData
          columns={columnData2}
          rows={donationHistory}
          hasFilter={true}
          filterColumnKey="bloodType"
        />
      </div>
    </>
  );
};

export default HeadNurseHistory;
