import { useEffect, useState } from "react";

export default function useGetRegions() {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const handleResponse = (response) => {
      if (response.type === "get_list_region") {
        if (response.status === "success") {
          const allRegions = response.payload.regions || [];
          const regions = allRegions.map((region) => ({
            value: region.id,
            label: region.name,
          }));
          setRegions(regions);
        } else {
          console.error("Failed to fetch regions:", response.message);
        }
      }
    };
    window.electron.sendTCPMessage({ type: "get_list_region" });
    window.electron.onTCPMessage(handleResponse);

    return () => {
      window.electron.offTCPMessage(handleResponse);
    };
  }, []);

  return regions;
}
