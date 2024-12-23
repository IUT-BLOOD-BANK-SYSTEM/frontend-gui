import { useEffect, useState } from "react";
import useGetUser from "./useGetUser";

const useGetHeadNurseHistory = () => {
  const [requestHistory, setRequestHistory] = useState([]);
  const user = useGetUser("get_by_id_head_nurse");

  useEffect(() => {
    window.electron.sendTCPMessage({ type: "blood_request_history" });

    const handleBloodRequestResponse = (response) => {
      if (response.type === "blood_request_history") {
        if (response.status === "success") {
          const filteredRequests = response.payload.blood_requests.filter(
            (req) => req.hospital.id === user?.hospital?.id
          );
          setRequestHistory(filteredRequests);
        } else {
          console.error(
            "Failed to fetch blood request history:",
            response.message
          );
        }
      }
    };

    window.electron.onTCPMessage(handleBloodRequestResponse);

    return () => {
      window.electron.offTCPMessage(handleBloodRequestResponse);
    };
  }, [user]);

  return { requestHistory };
};

export default useGetHeadNurseHistory;
