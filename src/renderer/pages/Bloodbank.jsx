import { CirclePlus, Trash } from "lucide-react";
import { Button } from "../components/ui/button";
import BloodInfoCard from "../components/reusable/BloodInfoCard";
import React from "react";

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
        <Button className="bg-success flex items-center w-[149px] h-[46px] gap-x-2 text-lg font-semibold hover:bg-emerald-600">
          <CirclePlus /> Add
        </Button>
        <Button className="bg-secondary flex items-center w-[149px] h-[46px] gap-x-2 text-lg font-semibold hover:bg-red-700">
          <Trash /> Remove
        </Button>
      </div>
    </section>
  );
};
export default BloodBank;
