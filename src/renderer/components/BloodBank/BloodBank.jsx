import BloodInfoCard from "../reusable/BloodInfoCard";
import React from "react";
import GreenButton from "../reusable/GreenButton";
import RedButton from "../reusable/RedButton";
const bloodData = [
    { bloodType: "A+", bloodAmount: "0 L"},
    { bloodType: "A-", bloodAmount: "0 L"},
    { bloodType: "AB+", bloodAmount: "0 L"},
    { bloodType: "AB-", bloodAmount: "0 L"},
    { bloodType: "O+", bloodAmount: "0 L"},
    { bloodType: "O-", bloodAmount: "0 L"},
    { bloodType: "B+", bloodAmount: "0 L"},
    { bloodType: "B-", bloodAmount: "0 L"},
  ];
const BloodBank = () =>{
return(
    <section className="flex flex-col gap-16">
    <h1 className="font-semibold text-xl">Blood Bank:</h1>
    <div className="grid grid-cols-4 gap-5">
    {bloodData.map((item) => (
        <BloodInfoCard 
          bloodType={item.bloodType} 
          bloodAmount={item.bloodAmount} 
        />
      ))}
    </div>
    <div className="grid grid-cols-1 gap-3 w-3/4">
        <GreenButton text={'Add'}/>
        </div>
        <div className="grid grid-cols-1 gap-3 w-3/4">
        <RedButton text={'Remove'}/>
        </div>


  </section>
)
};
export default BloodBank
