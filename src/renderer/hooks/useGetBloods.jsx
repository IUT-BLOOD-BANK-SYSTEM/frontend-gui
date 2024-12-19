import { useEffect, useState } from "react";

export default function useGetBloods() {
  const [bloods, setBloods] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    window.electron.sendTCPMessage({ type: "get_list_blood_type" });
    window.electron.onTCPMessage((response) => {
      if (response.type === "get_list_blood_type") {
        if (response.status === "success") {
          const properData = response.payload.blood_types.map((blood) => ({
            value: blood.id,
            label: blood.bloods_type,
          }));
          setBloods(properData);
        } else {
          console.error("Failed to fetch blood types:", response.message);
        }
      }
    });
  }, []);

  return { bloods, isLoading };
}
