import { useState, useEffect } from "react";

const useGetUserHistory = () => {
  const [donationHistory, setDonationHistory] = useState([]);
  const [acceptanceHistory, setAcceptanceHistory] = useState([]);
  // const [appointmentsData, setAppointmentsData] = useState([]);

  const { user_id } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    // window.electron.sendTCPMessage({ type: "get_list_appointments" });
    // window.electron.onTCPMessage((response) => {
    //   if (response.type === "get_list_appointments") {
    //     if (response.status === "success") {
    //       setAppointmentsData(response.payload);
    //     } else {
    //       console.error("Failed to fetch appointments:", response.message);
    //     }
    //   }
    // });

    window.electron.sendTCPMessage({ type: "get_list_blood_donation" });
    window.electron.onTCPMessage((response) => {
      console.log(response);
      if (response.type === "get_list_blood_donation") {
        if (response.status === "success") {
          setDonationHistory(response.payload.blood_donations);
        } else {
          console.error("Failed to fetch donation history:", response.message);
        }
      }
    });

    window.electron.sendTCPMessage({ type: "get_list_blood_acceptance" });
    window.electron.onTCPMessage((response) => {
      console.log(response);
      if (response.type === "get_list_blood_acceptance") {
        if (response.status === "success") {
          const allHospital = response.payload.blood_acceptances || [];

          const filteredData = allHospital.filter(
            (item) => item.patient.id === user_id
          );

          setAcceptanceHistory(filteredData);
        } else {
          console.error(
            "Failed to fetch acceptance history:",
            response.message
          );
        }
      }
    });
  }, []);

  return { donationHistory, acceptanceHistory };
};
export default useGetUserHistory;
