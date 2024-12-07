import { Trash } from "lucide-react";
import React from "react";
import TableData from "../components/reusable/TableData";

const columnData = [
  { label: "ID", key: "id" },
  { label: "Name", key: "name" },
  { label: "Phone", key: "phone" },
  { label: "Blood type", key: "bloodType" },
  { label: "Action", key: "action" },
];
const rowData = [
  {
    id: "2343255",
    name: "Steftcho Dokov",
    phone: "+998903457856",
    bloodType: "AB+",
    action: <Trash color="#D21F3C" className=" cursor-pointer" size={20} />,
  },
  {
    id: "2343255",
    name: "Steftcho Dokov",
    phone: "+998903457856",
    bloodType: "AB+",
    action: <Trash color="#D21F3C" className=" cursor-pointer" size={20} />,
  },
  {
    id: "2343255",
    name: "Steftcho Dokov",
    phone: "+998903457856",
    bloodType: "AB+",
    action: <Trash color="#D21F3C" className=" cursor-pointer" size={20} />,
  },
  {
    id: "2343255",
    name: "Steftcho Dokov",
    phone: "+998903457856",
    bloodType: "AB+",
    action: <Trash color="#D21F3C" className=" cursor-pointer" size={20} />,
  },
  {
    id: "2343255",
    name: "Steftcho Dokov",
    phone: "+998903457856",
    bloodType: "AB+",
    action: <Trash color="#D21F3C" className=" cursor-pointer" size={20} />,
  },
];

const AdminUserManagement = () => {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="font-semibold text-xl">Users</h1>
      <TableData columns={columnData} rows={rowData} />
    </section>
  );
};

export default AdminUserManagement;
