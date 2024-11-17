import React from "react";
import { Link } from "react-router-dom";
import logImg1 from "../assets/login_image.png";
import Heading from "../components/Heading";

const Role = () => {
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
              <Link
                to="#"
                className="text-white border border-solid rounded-full py-2 px-20 hover:bg-secondary hover:border-secondary"
              >
                H.Nurse
              </Link>
              <Link
                to="#"
                className="text-white border border-solid rounded-full py-2 px-20 hover:bg-secondary hover:border-secondary"
              >
                Doctor
              </Link>
              <Link
                to="#"
                className="bg-secondary text-white rounded-full py-2 px-20 hover:bg-transparent hover:border hover:border-secondary hover:text-secondary"
              >
                User
              </Link>
            </div>
          </div>

          <div className="flex justify-center mt-5 text-center">
            <Link
              to="#"
              className="bg-secondary w-full text-white py-2 px-4 rounded-md hover:bg-[#B01733]"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Role;
