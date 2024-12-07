import React, { useState } from "react";
import TableData from "../reusable/TableData";

const columnData = [
  { label: "Date", key: "date" },
  { label: "Hospital Name", key: "hospitalName" },
  { label: "Status", key: "status" },
  { label: "Blood Type", key: "bloodType" },
  { label: "Amount", key: "amount"},
  { label: "Patient Name", key: "patientName" },
  { label: "Passport ID", key: "passportID"},
];

const rowData = [
  {
    id: 1,
    date: "28.10.2024",
    hospitalName: "Haemalab-#1",
    status: "Pending",
    bloodType: "A+",
    amount: "450ml",
    patientName: "Dr. Abdul Raheem",
    passportID: "AA1234567",
  },
  {
    id: 2,
    date: "28.10.2024",
    hospitalName: "Haemalab-#1",
    status: "Available",
    bloodType: "B",
    amount: "450ml",
    patientName: "Dr. Abdul Raheem",
    passportID: "AA1234567",
  },
  {
    id: 3,
    date: "28.10.2024",
    hospitalName: "Haemalab-#1",
    status: "Not Available",
    bloodType: "AB+",
    amount: "450ml",
    patientName: "Dr. Abdul Raheem",
    passportID: "AA1234567",
  },
  {
    id: 4,
    date: "28.10.2024",
    hospitalName: "Haemalab-#1",
    status: "Available",
    bloodType: "C+",
    amount: "450ml",
    patientName: "Dr. Abdul Raheem",
    passportID: "AA1234567",
  },
  {
    id: 5,
    date: "28.10.2024",
    hospitalName: "Haemalab-#1",
    status: "Available",
    bloodType: "D",
    amount: "450ml",
    patientName: "Dr. Abdul Raheem",
    passportID: "AA1234567",
  },
];

const DoctorHistory  = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold mb-4">Recent notifications</h2>
        <TableData columns={columnData} rows={rowData} />
    </div>
  );
};

export default DoctorHistory;

