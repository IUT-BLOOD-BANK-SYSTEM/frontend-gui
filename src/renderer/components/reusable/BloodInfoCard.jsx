import React from "react";

const BloodInfoCard = ({ bloodType, bloodAmount }) => {
  return (
    <div className="bg-[#fff] flex flex-col gap-4 justify-center px-5 h-36 items-center rounded-lg">
      <h1 className="font-bold text-[#D21F3C] text-4xl">{bloodType}</h1>
      <div className="font-bold text-lg text-[#D21F3C] px-3 py-1 border-2 rounded-md border-[#D21F3C]">
        {bloodAmount}
      </div>
    </div>
  );
};

export default BloodInfoCard;
