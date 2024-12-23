import { useEffect, useState } from "react";

export default function useGetData(actionName, role) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleResponse = (response) => {
      console.log("Received response:", response); // Debugging received data

      if (response.type === actionName) {
        if (response.status === "success") {
          console.log("Data fetched:", response.payload); // Debugging payload
          setData(response.payload[role]);
          setError(null);
        } else {
          console.error("Error fetching data:", response.message);
          setError(response.message || "Failed to fetch data.");
        }
        setLoading(false);
      }
    };

    console.log(`Subscribing to data updates for: ${actionName}`);
    setLoading(true);
    window.electron.sendTCPMessage({ type: actionName }); // Request data
    window.electron.onTCPMessage(handleResponse); // Listen for responses

    return () => {
      console.log(`Unsubscribing from updates for: ${actionName}`);
      window.electron.offTCPMessage(handleResponse);
    };
  }, [actionName]);

  return { data, loading, error };
}
