import React from "react";
import { Circle } from "lucide-react";

const UpcomingAppointmentsCard = ({ data }) => {
  const { appointment_date, status } = data;
  const appointmentDate = new Date(appointment_date);
  const currentDate = new Date();

  if (appointmentDate < currentDate) {
    return null;
  }

  const month = appointmentDate.toLocaleString("default", { month: "long" });
  const day = appointmentDate.getDate();

  const time = appointmentDate.toISOString().slice(11, 16);

  return (
    <div className="bg-white shadow-sm rounded-xl p-4 flex items-center gap-6">
      {/* Date Section */}
      <div className="flex flex-col justify-center items-center">
        <span className="text-red-600 text-sm font-medium">{month}</span>
        <span className="text-red-600 text-3xl font-bold leading-none">
          {day}
        </span>
      </div>

      {/* Status and Time Section */}
      <div className="space-y-1">
        <div className="text-black flex items-center gap-1.5">
          <Circle className="h-2 w-2 fill-emerald-500 text-emerald-500" />
          <span className="text-sm">
            Status: <span className="text-black font-medium">{status}</span>
          </span>
        </div>
        <div className="text-black text-sm">
          Time: <span className="font-medium">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointmentsCard;
