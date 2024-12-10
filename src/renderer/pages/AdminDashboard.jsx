import React from "react";
import banner from "../assets/banner.svg";
import TableData from "../components/reusable/TableData";
import { Button } from "../components/ui/button";
import { CirclePlus, Edit, Edit2, Trash } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import FormField from "../components/reusable/FormField";

import { bloodTypes } from "../lib/utils";
import SubmitButton from "../components/reusable/SubmitButton";

const columnData = [
  { label: "ID", key: "id" },
  { label: "Name", key: "name" },
  { label: "Region", key: "region" },
  { label: "Head nurse", key: "headNurse" },
  { label: "Phone", key: "phone" },
  { label: "Address", key: "address" },
  { label: "Action", key: "action" },
];
const rowData = [
  {
    id: "96127984",
    name: "ZiyoUz",
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
    name: "ZiyoUz",
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
    name: "ZiyoUz",
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
    name: "ZiyoUz",
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
    name: "ZiyoUz",
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
        <div className="flex flex-col gap-10 items-end ">
          <div className="w-full">
            <TableData columns={columnData} rows={rowData} />
          </div>

          <Dialog>
            <DialogTrigger>
              <Button className="bg-success flex items-center px-10 py-5 gap-x-2 text-lg font-semibold hover:bg-emerald-600">
                <CirclePlus /> Add
              </Button>
            </DialogTrigger>
            <DialogContent>
              <div className="flex flex-col ">
                <DialogHeader className={`text-black`}>
                  <DialogTitle>Add hospital</DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-5 mt-7">
                  <FormField
                    name="hospitalName"
                    label="Hospital name"
                    bgColor="bg-white"
                    textColor="text-black"
                    type="text"
                    options={bloodTypes}
                    required={true}
                    borderColor="border-[#B9B9B9]"
                  />

                  <div className="flex gap-4">
                    <FormField
                      name="region"
                      label="Region"
                      bgColor="bg-white"
                      textColor="text-black"
                      type="text"
                      required={true}
                      borderColor="border-[#B9B9B9]"
                    />
                    <FormField
                      name="phone"
                      label="Phone"
                      bgColor="bg-white"
                      textColor="text-black"
                      type="text"
                      required={true}
                      borderColor="border-[#B9B9B9]"
                    />
                  </div>

                  <FormField
                    name="address"
                    label="Address"
                    bgColor="bg-white"
                    textColor="text-black"
                    type="text"
                    required={true}
                    borderColor="border-[#B9B9B9]"
                  />

                  <FormField
                    name="headNurse"
                    label="Head nurse"
                    bgColor="bg-white"
                    textColor="text-black"
                    type="text"
                    required={true}
                    borderColor="border-[#B9B9B9]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <SubmitButton text="Remove from blood bank" />
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button className="bg-transparent text-black hover:bg-gray-100 border border-black text-[17px] w-full">
                        Cancel
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
