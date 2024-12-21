import { useEffect, useState } from "react";

export default function useGetBloodInventory() {
  const [bloodInventory, setBloodInventory] = useState([]);
  useEffect(() => {
    window.electron.sendTCPMessage({ type: "get_list_blood_inventory" });
    window.electron.onTCPMessage((response) => {
      console.log(response);
      if (response.type === "get_list_blood_inventory") {
        if (response.status === "success") {
          setBloodInventory(response.payload.blood_inventories);
        } else {
          console.error("Failed to fetch hospitals:", response.message);
        }
      }
    });
  }, []);

  return { bloodInventory };
}
