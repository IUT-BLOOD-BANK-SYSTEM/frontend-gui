import React from "react";
import TableData from "../reusable/TableData";
import useGetDoctorHistory from "../../hooks/useGetDoctorHistory";

const columnData = [
  { label: "Date", key: "created_at" },
  { label: "Hospital Name", key: "hospital[name]" },
  { label: "Status", key: "status" },
  { label: "Blood Type", key: "blood_type[bloods_type]" },
  { label: "Amount", key: "quantity" },
  { label: "Patient Name", key: "user_name" },
  { label: "Passport ID", key: "user_passport_number" },
];

const DoctorHistory = () => {
  const { requestHistory } = useGetDoctorHistory();

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
