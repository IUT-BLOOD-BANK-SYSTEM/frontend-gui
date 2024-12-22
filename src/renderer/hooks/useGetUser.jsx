import { useState, useEffect } from "react";

export default function useGetUser(type) {
  const [user, setUser] = useState({});

  const handleResponse = (response) => {
    console.log(response);

    if (response.type !== type) return;
    if (response.status === "success") {
      setUser(response.payload);
    } else {
      console.error("Failed to fetch user:", response?.payload?.message);
    }
  };

  useEffect(() => {
    const { user_id } = JSON.parse(localStorage.getItem("user"));
    window.electron.sendTCPMessage({
      type,
      payload: {
        id: user_id,
      },
    });
    window.electron.onTCPMessage(handleResponse);

    return () => {
      window.electron.offTCPMessage(handleResponse);
    };
  }, []);

  return user;
}
