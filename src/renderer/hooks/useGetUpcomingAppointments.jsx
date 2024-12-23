import { useState, useEffect, useCallback } from "react";

export default function useGetUpcomingAppointments() {
  const [appointments, setAppointments] = useState([]);
  const { user_id } = JSON.parse(localStorage.getItem("user"));

  const fetchAppointments = useCallback(() => {
    window.electron.sendTCPMessage({
      type: "get_list_appointment",
      payload: { donor_id: user_id },
    });
  }, [user_id]);

  useEffect(() => {
    const handleTCPResponse = (response) => {
      if (response.type === "get_list_appointment") {
        if (response.status === "success") {
          const allAppointments = response.payload.appointments;
          const currentAppointments = allAppointments.filter(
            (app) => app.donor.id === user_id
          );
          setAppointments(currentAppointments);
        } else {
          console.error("Failed to fetch appointments:", response.message);
        }
      }
    };

    window.electron.onTCPMessage(handleTCPResponse);

    // Initial fetch
    fetchAppointments();

    return () => {
      window.electron.offTCPMessage(handleTCPResponse);
    };
  }, [fetchAppointments, user_id]);

  return { appointments, fetchAppointments };
}
