import React from "react";
import banner from "../assets/banner.svg";
import TableData from "../components/reusable/TableData";
import { Button } from "../components/ui/button";
import { CirclePlus, Edit, Edit2, Trash } from "lucide-react";

const columnData = [
  { label: "ID", key: "id" },
  { label: "Region", key: "region" },
  { label: "Head nurse", key: "headNurse" },
  { label: "Phone", key: "phone" },
  { label: "Address", key: "address" },
  { label: "Action", key: "action" },
];
const rowData = [
  {
    id: "96127984",
    region: "Tashkent",
    headNurse: "Anna Tomskova",
    phone: "+998903457856",
    address: "Mirzo Ulugbek, Ziyolilar street",
    action: (
      <div className="flex gap-5">
        <Edit2 color="#D21F3C" className=" cursor-pointer" size={20} />
        <Trash color="#D21F3C" className=" cursor-pointer" size={20} />
      </div>
    ),
  },
  {
    id: "96127984",
    region: "Tashkent",
    headNurse: "Anna Tomskova",
    phone: "+998903457856",
    address: "Mirzo Ulugbek, Ziyolilar street",
    action: (
      <div className="flex gap-5">
        <Edit2 color="#D21F3C" className=" cursor-pointer" size={20} />
        <Trash color="#D21F3C" className=" cursor-pointer" size={20} />
      </div>
    ),
  },
  {
    id: "96127984",
    region: "Tashkent",
    headNurse: "Anna Tomskova",
    phone: "+998903457856",
    address: "Mirzo Ulugbek, Ziyolilar street",
    action: (
      <div className="flex gap-5">
        <Edit2 color="#D21F3C" className=" cursor-pointer" size={20} />
        <Trash color="#D21F3C" className=" cursor-pointer" size={20} />
      </div>
    ),
  },
  {
    id: "96127984",
    region: "Tashkent",
    headNurse: "Anna Tomskova",
    phone: "+998903457856",
    address: "Mirzo Ulugbek, Ziyolilar street",
    action: (
      <div className="flex gap-5">
        <Edit2 color="#D21F3C" className=" cursor-pointer" size={20} />
        <Trash color="#D21F3C" className=" cursor-pointer" size={20} />
      </div>
    ),
  },
  {
    id: "96127984",
    region: "Tashkent",
    headNurse: "Anna Tomskova",
    phone: "+998903457856",
    address: "Mirzo Ulugbek, Ziyolilar street",
    action: (
      <div className="flex gap-5">
        <Edit2 color="#D21F3C" className=" cursor-pointer" size={20} />
        <Trash color="#D21F3C" className=" cursor-pointer" size={20} />
      </div>
    ),
  },
];

const AdminDashboard = () => {
  return (
    <section className="flex flex-col gap-16">
      <div>
        <img
          src={banner}
          alt="banner"
          className="w-full h-[240px] object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-10">
        <h1 className="font-semibold text-xl">Hospitals</h1>
        <div className="flex flex-col gap-10 items-end">
          <TableData columns={columnData} rows={rowData} />
          <Button className="bg-success flex items-center px-10 py-5 gap-x-2 text-lg font-semibold hover:bg-emerald-600">
            <CirclePlus /> Add
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
