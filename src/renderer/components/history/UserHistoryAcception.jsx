import useGetUserHistory from "../../hooks/useGetUserHistory";
import TableData from "../reusable/TableData";

const columnData = [
  { label: "Date", key: "acceptance_date" },
  { label: "Status", key: "status" },
  { label: "Hospital Name", key: `hospital[name]` },
  { label: "Doctor Name", key: "doctorName" },
];

const UserHistoryAcception = () => {
  const { acceptanceHistory } = useGetUserHistory();
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
