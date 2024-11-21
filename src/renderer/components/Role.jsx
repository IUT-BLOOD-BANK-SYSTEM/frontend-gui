import React from "react";
import { Link } from "react-router-dom";
import logImg1 from "../assets/login_image.png";
import Heading from "./Heading";

const Role = ({setStep, setRole, role}) => {

  const handleClick = () => {
    if(role) {
      setStep(2)
    }
  }

  return (
    <div className="min-h-screen bg-primary grid place-content-center mx-5">
      <div className="flex w-full items-center">
        <div className="flex w-1/2">
          <img src={logImg1} alt="img1" />
        </div>
        <div className="flex flex-col w-1/2 gap-5">
         <Heading />
          <div>
            <h3 className="my-5 text-lg">Choose account type:</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => setRole("head nurse")}
                className={`text-white border border-solid rounded-full py-2 px-20 hover:bg-secondary hover:border-secondary transition-colors duration-300 ${role === "head nurse" ? "bg-secondary border-secondary" : "bg-transparent"}`}
              >
                H.Nurse
              </button>
              <button
                type="button"
                onClick={() => setRole("doctor")}
                className={`text-white border border-solid rounded-full py-2 px-20 hover:bg-secondary hover:border-secondary transition-colors duration-300  ${role === "doctor" ? "bg-secondary border-secondary" : "bg-transparent"}`}
              >
                Doctor
              </button>
              <button
                type="button"
                onClick={() => setRole("user")}
                className={`text-white border border-solid rounded-full py-2 px-20 hover:bg-secondary hover:border-secondary transition-colors duration-300  ${role === "user" ? "bg-secondary border-secondary" : "bg-transparent"}`}
              >
                User
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-5 text-center">
            <button
              type="button"
              onClick={handleClick}
              disabled={!role}
              className={`bg-secondary w-full text-white py-2 px-4 rounded-md hover:bg-[#B01733] transition-colors duration-300 ${role ? "cursor-pointer" : "cursor-not-allowed"} ${role ? "opacity-100" : "opacity-60"}`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Role;
