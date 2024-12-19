import { useEffect, useState } from "react";

export default function useGetHospital() {
  const [hospitals, setHospitals] = useState([]);
  const [customHospitals, setCustomHospitals] = useState([]);

  useEffect(() => {
    window.electron.sendTCPMessage({ type: "get_list_hospital" });
    window.electron.onTCPMessage((response) => {
      console.log(response);
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
    });
  }, []);

  return { hospitals, customHospitals };
}
