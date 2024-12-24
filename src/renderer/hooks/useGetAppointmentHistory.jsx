import { useEffect, useState } from "react";
import useGetUser from "./useGetUser";

const useGetAppointmentHistory = (refetch = null) => {
  const [appointmentHistory, setAppointmentHistory] = useState([]);
  const user = useGetUser("get_by_id_head_nurse");

  useEffect(() => {
    window.electron.sendTCPMessage({ type: "get_list_appointment" });

    const handleAppointmentResponse = (response) => {
      if (response.type === "get_list_appointment") {
        if (response.status === "success") {
          const allAppointments = response.payload.appointments || [];
          const filteredAppointments = allAppointments
            .filter((req) => req.hospital.id === user?.hospital?.id)
            .map((appointment) => {
              const date = new Date(appointment.appointment_date);
              const time = `${date
                .getUTCHours()
                .toString()
                .padStart(2, "0")}:${date
                .getUTCMinutes()
                .toString()
                .padStart(2, "0")}`;

              // Normalize data
              const donorName = appointment.donor?.first_name
                ? `${appointment.donor.first_name} ${appointment.donor.second_name}`
                : appointment.unregistered_name;

              const donorPassportNumber =
                appointment.donor?.passport_number ||
                appointment.unregistered_passport_number;

              return {
                ...appointment,
                time, // Normalized time
                donorName, // Normalized donor name
                "donor[passport_number]": donorPassportNumber, // Explicitly mapped to match table key
              };
            });
          setAppointmentHistory(filteredAppointments);
        } else {
          console.error(
            "Failed to fetch appointment history:",
            response.message
          );
        }
      }
    };

    window.electron.onTCPMessage(handleAppointmentResponse);

    return () => {
      window.electron.offTCPMessage(handleAppointmentResponse);
    };
  }, [user, refetch]);

  return { appointmentHistory };
};

export default useGetAppointmentHistory;
