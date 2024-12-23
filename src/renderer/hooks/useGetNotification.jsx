import React, { useState, useEffect } from "react";

export default function UseGetNotification() {
  const [Notification, setNotification] = useState([]);
  const { user_id } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const handleTCPResponse = (response) => {
      console.log(response);
      if (response.type === "get_list_notification") {
        console.log("Inside 1");
        if (response.status === "success") {
          console.log("Inside 2");
          console.log(response.payload.notification);

          const filteredRequests = response.payload.notification.filter(
            (req) => req?.recipient_id == user_id
          );

          // Format the created_at timestamp to "HH:mm" format
          const formattedNotifications = filteredRequests.map(
            (notification) => {
              const date = new Date(notification.created_at);
              const time = date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              });

              return {
                ...notification,
                formatted_time: time,
              };
            }
          );

          setNotification(formattedNotifications);
        } else {
          console.error("Failed to fetch blood inventory:", response.message);
        }
      }
    };

    window.electron.sendTCPMessage({ type: "get_list_notification" });
    window.electron.onTCPMessage(handleTCPResponse);

    return () => {
      window.electron.offTCPMessage(handleTCPResponse);
    };
  }, []);

  console.log(Notification);

  return { Notification };
}
