import { CirclePlus } from "lucide-react";
import banner from "../../assets/banner.svg";
import UpcomingAppointmentsCard from "../reusable/UpcomingAppointmentsCard";
import MedicalInfoCard from "../reusable/MedicalInfoCard";
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
import { Link } from "react-router-dom";

const bloodDonationData = [
  {
    id: 1,
    date: "28.10.2024",
    time: "15:00",
    status: "Successfull",
    hospital: "ZiyoUz Clinic",
    doctor: "Dr. Marshall Mathers",
  },

  {
    id: 2,
    date: "28.10.2024",
    time: "15:00",
    status: "Successfull",
    hospital: "ZiyoUz Clinic",
    doctor: "Dr. Marshall Mathers",
  },

  {
    id: 3,
    date: "28.10.2024",
    time: "15:00",
    status: "Successfull",
    hospital: "ZiyoUz Clinic",
    doctor: "Dr. Marshall Mathers",
  },

  {
    id: 4,
    date: "28.10.2024",
    time: "15:00",
    status: "Successfull",
    hospital: "ZiyoUz Clinic",
    doctor: "Dr. Marshall Mathers",
  },

  {
    id: 5,
    date: "28.10.2024",
    time: "15:00",
    status: "Successfull",
    hospital: "ZiyoUz Clinic",
    doctor: "Dr. Marshall Mathers",
  },
];

const appointmentsData = [
  {
    id: 1,
    date: 28,
    time: "15:00",
    status: "Approved",
    month: "October",
    patient: "John Watson",
  },

  {
    id: 2,
    date: 28,
    time: "15:00",
    status: "Approved",
    month: "October",
    patient: "John Watson",
  },

  {
    id: 3,
    date: 28,
    time: "15:00",
    status: "Approved",
    month: "October",
    patient: "John Watson",
  },
];

const UserDashboard = () => {
  return (
    <section className="flex flex-col gap-16">
      <img
        src={banner}
        alt="banner"
        className="w-full h-[240px] object-cover rounded-lg"
      />

      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Upcoming appointments</h1>
        <div className="grid grid-cols-2 gap-5">
          {appointmentsData.map((data) => (
            <UpcomingAppointmentsCard
              key={data.id}
              time={data.time}
              status={data.status}
              date={data.date}
              month={data.month}
            />
          ))}
          <Link
            to="/dashboard/donation"
            className="border border-white w-full h-36 flex justify-center items-center rounded-lg"
          >
            <div className="flex gap-3 items-center">
              {" "}
              <CirclePlus />{" "}
              <span className="font-semibold text-xl">Donate blood</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Medical information</h1>
        <MedicalInfoCard />
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Blood donation history</h1>
        <Table className="text-base">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Hospital name</TableHead>
              <TableHead className="text-right">Doctor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bloodDonationData.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.time}</TableCell>
                <TableCell>{data.status}</TableCell>
                <TableCell className="text-right">{data.hospital}</TableCell>
                <TableCell className="text-right">{data.doctor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Link to="/dashboard/history">
          <Button
            className="bg-transparent border border-white h-11 text-[17px] w-full"
            variant="ghost"
          >
            See more
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Blood acception history</h1>
        <Table className="text-base">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Hospital name</TableHead>
              <TableHead className="text-right">Doctor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bloodDonationData.map((data, index) => (
              <TableRow key={data.id}>
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.time}</TableCell>
                <TableCell>{data.status}</TableCell>
                <TableCell className="text-right">{data.hospital}</TableCell>
                <TableCell className="text-right">{data.doctor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Link to="/dashboard/history">
          <Button
            className="bg-transparent border border-white h-11 text-[17px] w-full"
            variant="ghost"
          >
            See more
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default UserDashboard;
