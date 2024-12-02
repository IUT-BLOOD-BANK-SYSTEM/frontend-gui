import React from "react";

const DoctorNotification = () => {
  const notifications = [
    {
      id: 1,
      message: "Blood A+ is available in the blood bank",
      time: "15:30",
      status: "accepted",
    },
    {
      id: 2,
      message: "Blood O- is not available in the blood bank",
      time: "15:30",
      status: "rejected", 
    },
  ];

  return (
    <div className="m-2">
      <h2 className="text-xl font-bold mb-4">Recent notifications</h2>
      <ul className="flex flex-col gap-5 m-8">
        {notifications.map((notification) => (
          <li key={notification.id} className="flex text-md justify-between py-2 border-transparent">
            <div className="flex items-center gap-9">
              <span
                className={`w-2.5 h-2.5 rounded-full mr-3 ${
                  notification.status === "accepted" || notification.status === "success"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              ></span>
              <p>{notification.message}</p>
            </div>
            <span className="text-gray-400 text-sm">{notification.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};




export default DoctorNotification;