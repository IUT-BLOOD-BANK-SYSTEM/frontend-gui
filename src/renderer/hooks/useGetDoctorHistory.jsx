import React from "react";
import { useEffect } from "react";

const useGetDoctorHistory = () => {
  const [requestHistory, setRequestHistory] = React.useState([]);

  const { user_id } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    window.electron.sendTCPMessage({ type: "blood_request_history" });
    window.electron.onTCPMessage((response) => {
      if (response.type === "blood_request_history") {
        if (response.status === "success") {
          const allNotifications = response.payload.blood_requests || [];

          const filteredRequests = allNotifications.filter(
            (req) => req.doctor.id === user_id
          );

          setRequestHistory(filteredRequests);
        } else {
          console.error("Failed to fetch request history:", response.message);
        }
      }
    });
  }, []);

  return { requestHistory };
};

export default useGetDoctorHistory;
