import { bloodTypes } from "../../lib/utils";
import banner from "../../assets/banner.svg";
import BloodInfoCard from "../reusable/BloodInfoCard";
import TableData from "../reusable/TableData";
import { Link } from "react-router-dom";
import SeeMoreButton from "../reusable/SeeMoreButton";
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

const HeadNurseDashboard = () => {
  const { requestHistory } = useGetHeadNurseHistory();

  return (
    <section className="flex flex-col gap-16">
      <img
        src={banner}
        alt="banner"
        className="w-full h-[240px] object-cover rounded-lg"
      />

      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Blood available</h1>
        <BloodInfoCard />
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Blood request history</h1>
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

export default HeadNurseDashboard;
