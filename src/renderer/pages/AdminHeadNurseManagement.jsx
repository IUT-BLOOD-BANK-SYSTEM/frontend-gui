import { Trash } from "lucide-react";
import React from "react";
import TableData from "../components/reusable/TableData";

const columnData = [
  { label: "ID", key: "id" },
  { label: "Name", key: "name" },
  { label: "Phone", key: "phone" },
  { label: "Hospital", key: "hospital" },
  { label: "Status", key: "status" },
  { label: "Action", key: "action" },
];
const rowData = [
  {
    id: "7530932",
    name: "Federico Chiesa",
    phone: "+998903457856",
    hospital: "San Siro",
    status: "Approved",
    action: <Trash color="#D21F3C" className=" cursor-pointer" size={20} />,
  },
  {
    id: "7530932",
    name: "Federico Chiesa",
    phone: "+998903457856",
    hospital: "San Siro",
    status: "Not approved",
    action: <Trash color="#D21F3C" className=" cursor-pointer" size={20} />,
  },
  {
    id: "7530932",
    name: "Federico Chiesa",
    phone: "+998903457856",
    hospital: "San Siro",
    status: "Not approved",
    action: <Trash color="#D21F3C" className=" cursor-pointer" size={20} />,
  },
  {
    id: "7530932",
    name: "Federico Chiesa",
    phone: "+998903457856",
    hospital: "San Siro",
    status: "Approved",
    action: <Trash color="#D21F3C" className=" cursor-pointer" size={20} />,
  },
  {
    id: "7530932",
    name: "Federico Chiesa",
    phone: "+998903457856",
    hospital: "San Siro",
    status: "Approved",
    action: <Trash color="#D21F3C" className=" cursor-pointer" size={20} />,
  },
];

const AdminHeadNurseManagement = () => {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="font-semibold text-xl">Head nurses</h1>
      <TableData columns={columnData} rows={rowData} />
    </section>
  );
};

export default AdminHeadNurseManagement;
