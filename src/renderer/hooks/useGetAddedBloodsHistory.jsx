import React, { useEffect } from "react";
import useGetUser from "./useGetUser";

const useGetAddedBloodsHistory = () => {
  const [addedBloodHistory, setRequestHistory] = React.useState([]);
  const user = useGetUser("get_by_id_head_nurse");

  useEffect(() => {
    window.electron.sendTCPMessage({ type: "get_list_blood_donation" });
    window.electron.onTCPMessage((response) => {
      console.log(response);

      if (response.type === "get_list_blood_donation") {
        if (response.status === "success") {
          const allDontations = response.payload.blood_donations || [];
          const filteredRequests = allDontations.filter(
            (req) => req.hospital.id === user?.hospital?.id
          );

          setRequestHistory(filteredRequests);
        } else {
          console.error("Failed to fetch request history:", response.message);
        }
      }
    });
  }, [user]);

  return { addedBloodHistory };
};

export default useGetAddedBloodsHistory;
