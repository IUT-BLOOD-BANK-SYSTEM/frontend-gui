import React from "react";
import { Dot } from "lucide-react";

const UpcomingAppointmentsCard = ({ date, month, status, time, patient }) => {
  return (
    <div className="bg-[#fff] flex gap-10 justify-start px-10 h-36 items-center rounded-lg">
      <div className="flex flex-col justify-center items-center text-[#D21F3C]">
        <h1 className="font-bold text-[#D21F3C] text-5xl">{date}</h1>
        <p className="font-semibold text-lg text-[#D21F3C]">{month}</p>
      </div>
      <div className="flex flex-col gap-2">
        {patient !== undefined ? (
          <div className="flex gap-3 font-semibold text-lg">
            <p className="text-gray-500">Patient:</p>
            <p className="text-[#000] flex items-center">{patient}</p>
          </div>
        ) : null}
        <div className="flex gap-3 font-semibold text-lg">
          <p className="text-gray-500">Status:</p>
          <p className="text-[#000] flex items-center">
            <Dot color="#2B9355" /> {status}
          </p>
        </div>

        <div className="flex gap-6 font-semibold text-lg">
          <p className="text-gray-500">Time:</p>
          <p className="text-[#000]">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointmentsCard;
