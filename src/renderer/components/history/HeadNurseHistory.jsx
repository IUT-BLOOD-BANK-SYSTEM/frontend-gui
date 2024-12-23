import React from "react";
import TableData from "../reusable/TableData";
import useGetUserHistory from "../../hooks/useGetUserHistory";
import useGetDoctorHistory from "../../hooks/useGetDoctorHistory";
import useGetHeadNurseHistory from "../../hooks/useGetHeadNurseHistory";
import useGetAddedBloodsHistory from "../../hooks/useGetAddedBloodsHistory";

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
  { label: "Date", key: "created_at" },
  { label: "Blood type", key: "blood_type[bloods_type]" },
  { label: "Amount", key: "quantity" },
  { label: "Donor's Passport ID", key: "unregistered_passport_number" },
  { label: "Donor's name", key: "unregistered_name" },
];

const HeadNurseHistory = () => {
  const { addedBloodHistory } = useGetAddedBloodsHistory();
  console.log(addedBloodHistory);

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
          rows={addedBloodHistory}
          hasFilter={true}
          filterColumnKey="created_at"
        />
      </div>
    </>
  );
};

export default HeadNurseHistory;
