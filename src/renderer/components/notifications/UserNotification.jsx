import React from "react";
import useGetNotification from "../../hooks/useGetNotification";

const UserNotification = () => {
  const { Notification } = useGetNotification();

  if (!Notification || Notification.length === 0) {
    return <div>No notifications available.</div>;
  }

  return (
    <div className="m-2">
      <h2 className="text-xl font-bold mb-4">Recent notifications</h2>
      <ul className="flex flex-col gap-5 m-8">
        {Notification.map((notification) => {
          // Extract date and time from the message
          const messageParts = notification.message.split(" in ");
          const messageText = messageParts[0] || notification.message;
          const datetimeLocation = messageParts[1] || "";
          const [datetime, location] = datetimeLocation.split(" at ");

          // Format date and time
          const [date, time] = (datetime || "").split("T");
          const formattedDate = date; // Already in YYYY-MM-DD format
          const formattedTime = time
            ? time.split(":").slice(0, 2).join(":")
            : "";

          // Construct formatted message
          const formattedMessage = `${messageText} in ${formattedDate}, ${formattedTime} at ${location}`;

          return (
            <li
              key={notification.id}
              className="flex text-md justify-between py-2 border-transparent"
            >
              <div className="flex items-center gap-9">
                <span
                  className={`w-2.5 h-2.5 rounded-full mr-3 ${
                    notification.message.includes("accept" || "successfully")
                      ? "bg-green-500"
                      : notification.message.includes("rejected")
                      ? "bg-red-500"
                      : "bg-gray-500"
                  }`}
                ></span>
                <p>{formattedMessage}</p>
              </div>
              <span className="text-gray-400 text-sm">
                {notification.formatted_time}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserNotification;
