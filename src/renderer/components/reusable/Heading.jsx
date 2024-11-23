import React from "react";
import icon from "../../assets/icon.png";

const Heading = () => {
  return (
    <div>
      <div className="flex justify-center gap-3 mb-5">
        <img src={icon} alt="icon" className="pt-3 w-12" />
        <h1 className="text-6xl font-bold">BloodBridge</h1>
      </div>
      <p className="text-center font-semibold text-2xl mb-6">
        <span class="block">Connecting donors and recipients,</span>
        <span class="block">saving lives.</span>
      </p>
    </div>
  );
};

export default Heading;
