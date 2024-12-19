import React from 'react'

const useGetDoctorHistory = () => {
  const [requestHistory, setRequestHistory] = useState([]);

  useEffect(() => {

    window.electron.sendTCPMessage({ type: "blood_request_history" });
    window.electron.onTCPMessage((response) => {
      if (response.type === "blood_request_history") {
        if (response.status === "success") {
          setRequestHistory(response.payload.blood_requests);
        } else {
          console.error(
            "Failed to fetch request history:",
            response.message
          );
        }
      }
    });
  }, []);

  return {requestHistory};
}

export default useGetDoctorHistory