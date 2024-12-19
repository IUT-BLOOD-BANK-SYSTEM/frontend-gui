import { useState, useEffect } from 'react';

const useGetUserHistory = () => {
  const [appointmentsData, setAppointmentsData] = useState([]);
  const [donationHistory, setDonationHistory] = useState([]);
  const [acceptanceHistory, setAcceptanceHistory] = useState([]);

  useEffect(() => {
    // window.electron.sendTCPMessage({ type: "get_upcoming_appointments" });
    // window.electron.onTCPMessage((response) => {
    //   if (response.type === "get_upcoming_appointments") {
    //     if (response.status === "success") {
    //       setAppointmentsData(response.payload);
    //     } else {
    //       console.error("Failed to fetch appointments:", response.message);
    //     }
    //   }
    // });

    window.electron.sendTCPMessage({ type: "blood_donation_history" });
    window.electron.onTCPMessage((response) => {
      if (response.type === "blood_donation_history") {
        if (response.status === "success") {
          setDonationHistory(response.payload.blood_donations);
        } else {
          console.error("Failed to fetch donation history:", response.message);
        }
      }
    });

    window.electron.sendTCPMessage({ type: "blood_acceptance_history" });
    window.electron.onTCPMessage((response) => {
      if (response.type === "blood_acceptance_history") {
        if (response.status === "success") {
          setAcceptanceHistory(response.payload.blood_acceptances);
        } else {
          console.error(
            "Failed to fetch acceptance history:",
            response.message
          );
        }
      }
    });
  }, []);

  return {appointmentsData,donationHistory, acceptanceHistory};
};
export default useGetUserHistory;
