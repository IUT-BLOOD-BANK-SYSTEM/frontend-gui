import { CirclePlus, Trash } from "lucide-react";
import { Button } from "../components/ui/button";
import BloodInfoCard from "../components/reusable/BloodInfoCard";
import React from "react";
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

const bloodData = [
  { bloodType: "A+", bloodAmount: "0 L" },
  { bloodType: "A-", bloodAmount: "0 L" },
  { bloodType: "AB+", bloodAmount: "0 L" },
  { bloodType: "AB-", bloodAmount: "0 L" },
  { bloodType: "O+", bloodAmount: "0 L" },
  { bloodType: "O-", bloodAmount: "0 L" },
  { bloodType: "B+", bloodAmount: "0 L" },
  { bloodType: "B-", bloodAmount: "0 L" },
];
const BloodBank = () => {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="font-semibold text-xl">Blood Bank:</h1>
      <div className="grid grid-cols-4 gap-5">
        {bloodData.map((item) => (
          <BloodInfoCard
            bloodType={item.bloodType}
            bloodAmount={item.bloodAmount}
          />
        ))}
      </div>
      <div className="flex items-center justify-end gap-5">
        <Dialog>
          <DialogTrigger>
            <Button className="bg-success flex items-center w-[149px] h-[46px] gap-x-2 text-lg font-semibold hover:bg-emerald-600">
              <CirclePlus /> Add
            </Button>
          </DialogTrigger>
          <DialogContent>
            <div className="flex flex-col ">
              <DialogHeader className={`text-black`}>
                <DialogTitle>Add blood</DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-2 gap-2 mt-7">
                <FormField
                  name="bloodType"
                  label="Blood type"
                  bgColor="bg-white"
                  textColor="text-black"
                  type="select"
                  options={bloodTypes}
                  required={true}
                  borderColor="border-[#B9B9B9]"
                />

                <FormField
                  name="amount"
                  label="Amount"
                  bgColor="bg-white"
                  textColor="text-black"
                  type="text"
                  required={true}
                  borderColor="border-[#B9B9B9]"
                />

                <FormField
                  name="name"
                  label="Donor's name"
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
              </div>
              <div className="flex flex-col gap-3">
                <SubmitButton text="Add to blood bank" />
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

        <Dialog>
          <DialogTrigger>
            <Button className="bg-secondary flex items-center w-[149px] h-[46px] gap-x-2 text-lg font-semibold hover:bg-red-700">
              <Trash /> Remove
            </Button>
          </DialogTrigger>
          <DialogContent>
            <div className="flex flex-col ">
              <DialogHeader className={`text-black`}>
                <DialogTitle>Remove blood</DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-2 gap-2 mt-7">
                <FormField
                  name="bloodType"
                  label="Blood type"
                  bgColor="bg-white"
                  textColor="text-black"
                  type="select"
                  options={bloodTypes}
                  required={true}
                  borderColor="border-[#B9B9B9]"
                />

                <FormField
                  name="amount"
                  label="Amount"
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
    </section>
  );
};
export default BloodBank;
