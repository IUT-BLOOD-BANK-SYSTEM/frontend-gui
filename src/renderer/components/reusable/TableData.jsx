import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const bloodDonationData = [
  {
    id: 1,
    date: "28.10.2024",
    time: "15:00",
    status: "Successfull",
    hospital: "ZiyoUz Clinic",
    doctor: "Dr. Marshall Mathers",
    patient: "Marshall Mathers",
    bloodAmount: "450ml",
    bloodType: "A+",
  },

  {
    id: 2,
    date: "28.10.2024",
    time: "15:00",
    status: "Successfull",
    hospital: "ZiyoUz Clinic",
    doctor: "Dr. Marshall Mathers",
    patient: "Marshall Mathers",
    bloodAmount: "450ml",
    bloodType: "A+",
  },

  {
    id: 3,
    date: "28.10.2024",
    time: "15:00",
    status: "Successfull",
    hospital: "ZiyoUz Clinic",
    doctor: "Dr. Marshall Mathers",
    patient: "Marshall Mathers",
    bloodAmount: "450ml",
    bloodType: "A+",
  },

  {
    id: 4,
    date: "28.10.2024",
    time: "15:00",
    status: "Successfull",
    hospital: "ZiyoUz Clinic",
    doctor: "Dr. Marshall Mathers",
    patient: "Marshall Mathers",
    bloodAmount: "450ml",
    bloodType: "A+",
  },

  {
    id: 5,
    date: "28.10.2024",
    time: "15:00",
    status: "Successfull",
    hospital: "ZiyoUz Clinic",
    doctor: "Dr. Marshall Mathers",
    patient: "Marshall Mathers",
    bloodAmount: "450ml",
    bloodType: "A+",
  },
];

const TableData = ({ columnHead3, columnHead4, columnHead5 }) => {
  return (
    /* Since 1st and 2nd column are the same for every table,
      I provided only 4th, 5th and 6th columns */

    <Table className="text-base">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>{columnHead3}</TableHead>
          <TableHead className="text-right">{columnHead4}</TableHead>
          <TableHead className="text-right">{columnHead5}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bloodDonationData.map((data) => (
          <TableRow key={data.id}>
            <TableCell>{data.date}</TableCell>
            <TableCell>{data.time}</TableCell>
            <TableCell>
              {columnHead3 == "Blood type"
                ? data.bloodType
                : columnHead3 == "Status"
                ? data.status
                : null}
            </TableCell>
            <TableCell className="text-right">
              {columnHead4 == "Amount"
                ? data.bloodAmount
                : columnHead4 == "Blood type"
                ? data.bloodType
                : columnHead4 == "Hospital name"
                ? data.hospital
                : null}
            </TableCell>
            <TableCell className="text-right">
              {columnHead5 == "Doctor name"
                ? data.doctor
                : columnHead5 == "Patient name"
                ? data.patient
                : null}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableData;
