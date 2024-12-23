import React, { useEffect, useState } from "react";

const BloodInfoCard = ({ hospitalId, headNurseId }) => {
  const [bloodInventory, setBloodInventory] = useState([]);

  useEffect(() => {
    window.electron.sendTCPMessage({ type: "get_list_blood_inventory" });

    const handleResponse = (response) => {
      console.log(response);
      if (response.type === "get_list_blood_inventory") {
        if (response.status === "success") {
          setBloodInventory(response.payload.blood_inventories);
        } else {
          console.error("Failed to fetch blood inventory:", response.message);
        }
      }
    };

    window.electron.onTCPMessage(handleResponse);

    return () => {
      window.electron.offTCPMessage(handleResponse);
    };
  }, []);

  const filteredBloodInventory = bloodInventory.filter((item) => {
    const matchesHospital = hospitalId ? item.hospital.id === hospitalId : true;
    const matchesHeadNurse = headNurseId
      ? item.hospital.head_nurse.id === headNurseId
      : true;

    return matchesHospital && matchesHeadNurse;
  });

  return (
    <div className="grid grid-cols-4 gap-5">
      {filteredBloodInventory.map((item, index) => (
        <div
          key={index}
          className="bg-[#fff] flex flex-col gap-4 justify-center px-5 h-36 items-center rounded-lg"
        >
          <h1 className="font-bold text-[#D21F3C] text-4xl">
            {item.blood_type.bloods_type}
          </h1>
          <div className="font-bold text-lg text-[#D21F3C] px-3 py-1 border-2 rounded-md border-[#D21F3C]">
            {item.quantity}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BloodInfoCard;
