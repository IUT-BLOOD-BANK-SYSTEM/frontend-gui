import React from "react";
import UseGetNotification from "../../hooks/UseGetNotification"; 

const DoctorNotification = () => {
  const { Notification } = UseGetNotification();

  if (!Notification || Notification.length === 0) {
    return <div>No notifications available.</div>;
  }

  return (
    <div className="m-2">
      <h2 className="text-xl font-bold mb-4">Recent notifications</h2>
      <ul className="flex flex-col gap-5 m-8">
        {Notification.map((notification) => (
          <li
            key={notification.id}
            className="flex text-md justify-between py-2 border-transparent"
          >
            <div className="flex items-center gap-9">
              <span
                className={`w-2.5 h-2.5 rounded-full mr-3 ${
                  notification.message.includes("not")
                    ? "bg-red-500"
                    : notification.message.includes("available")
                    ? "bg-green-500"
                    : "bg-gray-500" // fallback color in case neither is found
                }`}
              ></span>
              <p>{notification.message}</p>
            </div>
            <span className="text-gray-400 text-sm">{notification.formatted_time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorNotification;
