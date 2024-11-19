import React from 'react';
import icon from '../assets/Icon.png'

const HeadNurse = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary text-white my-16">
      <div className="w-1/2">
        <div className='flex justify-center gap-3 mb-7'>
          <img src={icon} alt="icon" className='pt-3 w-12'/>
          <h1 className="text-6xl font-bold">BloodCare</h1>
        </div>
        <p className="text-center font-semibold text-2xl mb-8">
        <span class="block">Connecting donors and recipients,</span>
        <span class="block">saving lives.</span>
           
        </p>
        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name*</label>
              <input
                type="text"
                className="w-full p-2 border border-[#e0e0e0] rounded bg-primary text-white focus:outline-none focus:ring focus:ring-[#E0E0E0]"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Second Name*</label>
              <input
                type="text"
                className="w-full p-2 border border-[#e0e0e0] rounded bg-primary text-white focus:outline-none focus:ring focus:ring-[#e0e0e0]"
                placeholder="Second name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth*</label>
              <input
                type="date"
                className="w-full p-2 border border-[#e0e0e0] rounded bg-primary text-white focus:outline-none focus:ring focus:ring-[#e0e0e0]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number*</label>
              <input
                type="tel"
                className="w-full p-2 border border-[#e0e0e0] rounded bg-primary text-white focus:outline-none focus:ring focus:ring-[#e0e0e0]"
                placeholder="+998901234567"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email*</label>
            <input
              type="email"
              className="w-full p-2 border border-[#e0e0e0] rounded bg-primary text-white focus:outline-none focus:ring focus:ring-[#e0e0e0]"
              placeholder="example@mail.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Hospital</label>
            <select
              className="w-full p-2 border border-[#e0e0e0] rounded bg-primary text-white focus:outline-none focus:ring focus:ring-[#e0e0e0]"
              required
            >
              <option value="">Select an option</option>
              <option value="hospital1">Hospital 1</option>
              <option value="hospital2">Hospital 2</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password*</label>
            <input
              type="password"
              className="w-full p-2 border border-[#e0e0e0] rounded bg-primary text-white focus:outline-none focus:ring focus:ring-[#e0e0e0]"
              placeholder="Enter password"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password*</label>
            <input
              type="password"
              className="w-full p-2 border border-[#e0e0e0] rounded bg-primary text-white focus:outline-none focus:ring focus:ring-[#e0e0e0]"
              placeholder="Confirm password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-secondary hover:bg-secondary text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring focus:ring-secondary"
          >
            Sign Up
          </button>

          <p className="text-sm text-center text-gray-400">
          <span class="block">By signing up to create an account I accept</span>
          <span class="block">Company's{' '}
            <a href="/terms" className="text-blue-400 hover:underline">
              Terms of Use
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-blue-400 hover:underline">
              Privacy Policy
            </a>.</span>
             
          </p>

        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-400 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default HeadNurse;