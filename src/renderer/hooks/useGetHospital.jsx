import { useEffect, useState } from "react";

export default function useGetHospital() {
  const [hospitals, setHospitals] = useState([]);
  const [customHospitals, setCustomHospitals] = useState([]);

  useEffect(() => {
    const handleResponse = (response) => {
      if (response.type === "get_list_hospital") {
        if (response.status === "success") {
          const properData = response.payload.hospitals.map((hospital) => ({
            value: hospital.id,
            label: hospital.name,
          }));
          setHospitals(response.payload.hospitals);
          setCustomHospitals(properData);
        } else {
          console.error("Failed to fetch hospitals:", response.message);
        }
      }
    };
    window.electron.sendTCPMessage({ type: "get_list_hospital" });
    window.electron.onTCPMessage(handleResponse);

    return () => {
      window.electron.offTCPMessage(handleResponse);
    };
  }, []);

  return { hospitals, customHospitals };
}
