import React from "react";

const BloodInfoCard = ({ bloodType, bloodAmount }) => {
  return (
    <div className="bg-[#fff] flex flex-col gap-5 justify-center px-10 h-36 items-center rounded-lg">
      <h1 className="font-bold text-[#D21F3C] text-4xl">{bloodType}</h1>
      <div className="font-bold text-lg text-[#D21F3C] px-3 py-1 border-2 rounded-md border-[#D21F3C]">
        {bloodAmount}L
      </div>
    </div>
  );
};

export default BloodInfoCard;
