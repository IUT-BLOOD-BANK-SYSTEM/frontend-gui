import React from 'react'
import logImg2 from '../assets/heart-hand.png'

const Heading = () => {
  return (
    <div>
         <div className="flex gap-3 justify-center mb-7">
            <img src={logImg2} alt="img2" />
            <h1 className="text-6xl font-bold">BloodCare</h1>
          </div>
          <h2 className="font-bold text-2xl text-center">
            Connecting donors and recipients, saving lives.
          </h2>
    </div>
  )
}

export default Heading