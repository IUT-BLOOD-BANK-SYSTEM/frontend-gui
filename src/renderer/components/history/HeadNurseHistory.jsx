import React from "react";
import TableData from "../reusable/TableData";
import useGetUserHistory from "../../hooks/useGetUserHistory";
import useGetDoctorHistory from "../../hooks/useGetDoctorHistory";
import useGetHeadNurseHistory from "../../hooks/useGetHeadNurseHistory";

const columnData = [
  { label: "Date", key: "created_at" },
  { label: "Doctor's hospital", key: "doctor[hospital][name]" },
  { label: "Blood type", key: "blood_type[bloods_type]" },
  { label: "Amount", key: "quantity" },
  { label: "Doctor Name", key: "doctorName" },
  { label: "Patient's ID", key: "user_passport_number" },
  { label: "Status", key: "status" },
];

const columnData2 = [
  { label: "Date", key: "date" },
  { label: "Blood type", key: "bloodType" },
  { label: "Amount", key: "amount" },
  { label: "Donor's Passport ID", key: "donorPassportId" },
  { label: "Donor's name", key: "donorName" },
];

const HeadNurseHistory = () => {
  const { donationHistory } = useGetUserHistory();
  const { requestHistory } = useGetHeadNurseHistory();

  return (
    <>
      <div className="space-y-6">
        <h1 className="font-semibold text-xl">Blood Request History</h1>
        <TableData
          columns={columnData}
          rows={requestHistory}
          hasFilter={true}
          filterColumnKey="status"
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
