import { useState, useEffect, useCallback } from "react";

export default function useGetUpcomingAppointments(shouldRefetch = null) {
  const [appointments, setAppointments] = useState([]);
  const { user_id } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const handleTCPResponse = (response) => {
      if (response.type === "get_list_appointment") {
        if (response.status === "success") {
          const allAppointments = response.payload?.appointments || [];
          const currentAppointments = allAppointments.filter(
            (app) => app.donor.id === user_id
          );
          setAppointments(currentAppointments);
        } else {
          console.error("Failed to fetch appointments:", response.message);
        }
      }
    };

    window.electron.sendTCPMessage({
      type: "get_list_appointment",
      payload: { donor_id: user_id },
    });
    window.electron.onTCPMessage(handleTCPResponse);

    return () => {
      window.electron.offTCPMessage(handleTCPResponse);
    };
  }, [shouldRefetch]);

  return appointments;
}
