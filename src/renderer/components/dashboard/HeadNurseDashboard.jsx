import { bloodRequestData, bloodTypes } from "../../lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import banner from "../../assets/banner.svg";
import BloodInfoCard from "../reusable/BloodInfoCard";

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
        <Table className="text-base">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Blood type</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Doctor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bloodRequestData.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.time}</TableCell>
                <TableCell>{data.bloodType}</TableCell>
                <TableCell className="text-right">{data.amount}</TableCell>
                <TableCell className="text-right">{data.doctor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
