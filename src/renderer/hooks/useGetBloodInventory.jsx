import { useEffect, useState } from "react";

export default function useGetBloodInventory(refetch=null) {
  const [bloodInventory, setBloodInventory] = useState([]);

  useEffect(() => {
    const handleTCPResponse = (response) => {
      if (response.type === "get_list_blood_inventory") {
        if (response.status === "success") {
          setBloodInventory(response.payload.blood_inventories);
        } else {
          console.error("Failed to fetch blood inventory:", response.message);
        }
      }
    };
    window.electron.sendTCPMessage({ type: "get_list_blood_inventory" });
    window.electron.onTCPMessage(handleTCPResponse);

    return () => {
      window.electron.offTCPMessage(handleTCPResponse);
    };
  }, []);

  return { bloodInventory };
}
