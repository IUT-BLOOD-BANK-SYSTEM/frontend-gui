import React, { useState, useEffect } from "react";

export default function useGetNotification() {
  const [Notification, setNotification] = useState([]);
  const { user_id } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const handleTCPResponse = (response) => {
      if (response.type === "get_list_notification") {
        if (response.status === "success") {
          const allNotification = response.payload.notification || [];

          const filteredRequests = allNotification.filter(
            (req) => req?.recipient_id == user_id
          );

          const formattedNotifications = filteredRequests
            .map((notification) => {
              const time = notification.created_at.split("T")[1].split(".")[0];
              const [hour, minute] = time.split(":");

              return {
                ...notification,
                formatted_time: `${hour}:${minute}`,
              };
            })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

          setNotification(formattedNotifications);
        } else {
          console.error("Failed to fetch notifications:", response.message);
        }
      }
    };

    window.electron.sendTCPMessage({ type: "get_list_notification" });
    window.electron.onTCPMessage(handleTCPResponse);

    return () => {
      window.electron.offTCPMessage(handleTCPResponse);
    };
  }, []);

  return { Notification };
}
