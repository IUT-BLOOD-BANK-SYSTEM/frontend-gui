import React from "react";
import { Button } from "../components/ui/button";
import { CirclePlus, LucideSortDesc } from "lucide-react";
import TableData from "../components/reusable/TableData";
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
  { label: "Date", key: "date" },
  { label: "Time", key: "time" },
  { label: "Passport ID", key: "passportID" },
  { label: "Donor's name", key: "donorName" },
  { label: "Status", key: "status" },
];
const rowData = [
  {
    date: "28.10.2024",
    time: "16:25",
    passportID: "AA0293784",
    donorName: "Abhijit Tarawade",
    status: "Approved",
  },
  {
    date: "28.10.2024",
    time: "16:25",
    passportID: "AA0293784",
    donorName: "Abhijit Tarawade",
    status: "Approved",
  },
  {
    date: "28.11.2024",
    time: "16:25",
    passportID: "AA0293784",
    donorName: "Alesandro Agostini",
    status: "Pending",
  },
  {
    date: "28.13.2024",
    time: "16:25",
    passportID: "AA0293784",
    donorName: "Alesandro Agostini",
    status: "Approved",
  },
  {
    date: "28.13.2024",
    time: "16:25",
    passportID: "AA0293784",
    donorName: "Ivan Vasilyevich",
    status: "Rejected",
  },
];

const Appointments = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl">
          Scheduled appointments for donation
        </h1>

        <Dialog>
          <DialogTrigger>
            <Button className="bg-success flex items-center  gap-x-2 text-base py-4 font-semibold hover:bg-emerald-600">
              <CirclePlus /> Schedule
            </Button>
          </DialogTrigger>
          <DialogContent>
            <div className="flex flex-col ">
              <DialogHeader className={`text-black`}>
                <DialogTitle>Schedule appointment</DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-2 gap-2 mt-7">
                <FormField
                  name="fullName"
                  label="Full name"
                  bgColor="bg-white"
                  textColor="text-black"
                  type="text"
                  required={true}
                  borderColor="border-[#B9B9B9]"
                />

                <FormField
                  name="id"
                  label="Passport ID"
                  bgColor="bg-white"
                  textColor="text-black"
                  type="text"
                  required={true}
                  borderColor="border-[#B9B9B9]"
                />

                <FormField
                  name="date"
                  label="Date of appointment"
                  bgColor="bg-white"
                  textColor="text-black"
                  type="date"
                  required={true}
                  borderColor="border-[#B9B9B9]"
                />

                <FormField
                  name="time"
                  label="Time of appointment"
                  bgColor="bg-white"
                  textColor="text-black"
                  type="text"
                  required={true}
                  borderColor="border-[#B9B9B9]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <SubmitButton />
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
      <div className="flex flex-col gap-7">
        <TableData
          columns={columnData}
          rows={rowData}
          filterColumnKey="status"
          hasFilter={true}
        />
      </div>
    </section>
  );
};

export default Appointments;
