import React from "react";
import medInfoIcon from "../../assets/blood-donation 1.svg";

const MedicalInfoCard = () => {
  return (
    <div className="bg-[#fff] flex gap-10 justify-start px-10 h-36 items-center rounded-lg">
      <div className="flex flex-col justify-center items-center">
        <img src={medInfoIcon} alt="medical info" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-3 font-semibold text-lg">
          <p className="text-gray-500">Blood type:</p>
          <p className="text-[#000] flex items-center"> A+</p>
        </div>

        <div className="flex gap-8 font-semibold text-lg">
          <p className="text-gray-500">Diseases:</p>
          <p className="text-[#000]">Hepatitis C</p>
        </div>
      </div>
    </div>
  );
};

export default MedicalInfoCard;
