import React from "react";
import TableData from "../reusable/TableData";

const columnData = [
  { label: "Date", key: "date" },
  { label: "Doctor's hospital", key: "doctorHospital" },
  { label: "Blood type", key: "bloodType" },
  { label: "Amount", key: "amount" },
  { label: "Doctor Name", key: "doctorName" },
  { label: "Patient's ID", key: "patientId" },
];
const rowData = [
  {
    id: 1,
    date: "28.10.2024",
    time: "16:25",
    bloodType: "A+",
    amount:"450 ml",
    doctorName: "Dr. Dre",
    patientId:"Azizbek",
  },
  {
    id: 2,
    date: "28.10.2024",
    time: "16:25",
    bloodType: "B",
    amount:"450 ml",
    doctorName: "Dr. Dre",
    patientId:"Azizbek",
  },
  {
    id: 3,
    date: "28.10.2024",
    time: "16:25",
    bloodType: "AB+",
    amount:"450 ml",
    doctorName: "Dr. Dre",
    patientId:"Azizbek",
  },
  {
    id: 4,
    date: "28.10.2024",
    time: "16:25",
    bloodType: "C+",
    amount:"450 ml",
    doctorName: "Dr. Dre",
    patientId:"Azizbek",
  },
  {
    id: 5,
    date: "28.10.2024",
    time: "16:25",
    bloodType: "D",
    amount:"450 ml",
    doctorName: "Dr. Dre",
    patientId:"Azizbek",
  },
];


const columnData2 = [
  { label: "Date", key: "date" },
  { label: "Blood type", key: "bloodType" },
  { label: "Amount", key: "amount" },
  { label: "Donor's Passport ID", key: "donorPassportId" },
  { label: "Donor's name", key: "donorName" },
]
const rowData2 = [
  {
    id: 1,
    date: "28.10.2024",
    bloodType: "A+",
    amount:"450 ml",
    donorPassportId: "AD0092987",
    donorName: "Ibrohim",
    
  },
  {
    id: 2,
    date: "28.10.2024",
    bloodType: "B",
    amount:"500 ml",
    donorPassportId: "AD0092987",
    donorName: "Ibrohim",
    
  },
  {
    id: 3,
    date: "28.10.2024",
    bloodType: "AB+",
    amount:"300 ml",
    donorPassportId: "AD0092987",
    donorName: "Ibrohim",
    
  },
  {
    id: 4,
    date: "28.10.2024",
    bloodType: "C+",
    amount:"250 ml",
    donorPassportId: "AD0092987",
    donorName: "Ibrohim",
    
  },
  {
    id: 5,
    date: "28.10.2024",
    bloodType: "D",
    amount:"280 ml",
    donorPassportId: "AD0092987",
    donorName: "Ibrohim",
    
  },
];




const HeadNurseHistory = () => {
  return <>
  <div className="space-y-6">
    <h1>Blood Request History</h1>
    <TableData columns={columnData} rows={rowData} />
    </div>
    <div className="space-y-6 mt-20">
    <h1>Added Bloods</h1>
    <TableData columns={columnData2} rows={rowData2} />
    </div>
  </>
};

export default HeadNurseHistory;
