import { bloodRequestData, bloodTypes } from "../../lib/utils";
import { Button } from "../ui/button";
import banner from "../../assets/banner.svg";
import BloodInfoCard from "../reusable/BloodInfoCard";
import TableData from "../reusable/TableData";

const HeadNurseDashboard = () => {
  return (
    <section className="flex flex-col gap-16">
      <img
        src={banner}
        alt="banner"
        className="w-full h-[240px] object-cover rounded-lg"
      />

      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Blood available</h1>
        <div className="grid grid-cols-4 gap-5">
          {bloodTypes.map((data, index) => (
            <BloodInfoCard
              bloodType={data.value}
              bloodAmount={12.5}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Blood request history</h1>

        <TableData
          columnHead3="Blood type"
          columnHead4="Amount"
          columnHead5="Doctor"
        />
        <Button
          className="bg-transparent border border-white h-11 text-[17px]"
          variant="ghost"
        >
          See more
        </Button>
      </div>
    </section>
  );
};

export default HeadNurseDashboard;
