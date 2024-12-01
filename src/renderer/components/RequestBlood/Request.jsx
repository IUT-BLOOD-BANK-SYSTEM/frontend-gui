import BloodInfoCard from "../reusable/BloodInfoCard";
import SubmitButton from "../reusable/SubmitButton";
import FormField from "../reusable/FormField";
import { hospitals } from "../../lib/utils";

const bloodData = [
  { bloodType: "A+", bloodAmount: "12.5 L" },
  { bloodType: "A-", bloodAmount: "0.5 L" },
  { bloodType: "AB+", bloodAmount: "16.0 L" },
  { bloodType: "AB-", bloodAmount: "14.5 L" },
  { bloodType: "O+", bloodAmount: "2.5 L" },
  { bloodType: "O-", bloodAmount: "2.5 L" },
  { bloodType: "B+", bloodAmount: "2.5 L" },
  { bloodType: "B-", bloodAmount: "2.5 L" },
];

const RequestBlood = () => {
return (
  <section className="flex flex-col gap-16">
    <div className="flex-col gap-3 items-center justify-center">  
        <FormField
            label="Select hospital to see available bloods"
            type="select"
            name="hospital"
            options={hospitals}
            required     
            labelClassName="text-center" // Pass class to center-align the label
        />  
    </div>
    <h1 className="font-semibold text-xl">Blood available:</h1>
    <div className="grid grid-cols-4 gap-5">
    {bloodData.map((item) => (
        <BloodInfoCard 
          bloodType={item.bloodType} 
          bloodAmount={item.bloodAmount} 
        />
      ))}
    </div>
    <div className="flex flex-col gap-6 items-center justify-center">
      <h1 className="font-semibold text-xl text-center">Please fill out this form</h1>
      <div className="grid grid-cols-2 gap-5 w-3/4">
        <div className="flex flex-col gap-2">
          <label for="dateAppointment" className="text-sm font-medium">Blood Type</label>
          <input className="border border-white w-full h-12 flex justify-center items-center rounded-lg text-black p-3" required/>
        </div>
        <div className="flex flex-col gap-2">
          <label for="dateAppointment" className="text-sm font-medium">Amount of Blood (ml)</label>
          <input className="border border-white w-full h-12 flex justify-center items-center rounded-lg text-black p-3" required/>
        </div>
        <div className="flex flex-col gap-2">
          <label for="dateAppointment" className="text-sm font-medium">Passport ID of patient</label>
          <input className="border border-white w-full h-12 flex justify-center items-center rounded-lg text-black p-3" required/>
        </div>
        <div className="flex flex-col gap-2">
          <label for="dateAppointment" className="text-sm font-medium">Name of patient</label>
          <input className="border border-white w-full h-12 flex justify-center items-center rounded-lg text-black p-3" required/>
        </div>
      </div>
        <div className="grid grid-cols-1 gap-3 w-3/4">
        <SubmitButton text={'Send Request'}/>
        </div>
    </div>
  </section>
);
};


export default RequestBlood;