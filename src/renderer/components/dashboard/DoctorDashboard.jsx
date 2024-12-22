import banner from "../../assets/banner.svg";
import TableData from "../reusable/TableData";
import SeeMoreButton from "../reusable/SeeMoreButton";
import { Link } from "react-router-dom";
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

const DoctorDashboard = () => {
  const { requestHistory } = useGetDoctorHistory();
  return (
    <section className="flex flex-col gap-16">
      <img
        src={banner}
        alt="banner"
        className="w-full h-[240px] object-cover rounded-lg"
      />
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Request history</h1>
        <TableData
          columns={columnData}
          rows={requestHistory}
          hasFilter={true}
          filterColumnKey="status"
        />
        <Link to="/dashboard/history">
          <SeeMoreButton />
        </Link>
      </div>
    </section>
  );
};

export default DoctorDashboard;
