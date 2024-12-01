import React from 'react';
import GreenButton from '../reusable/GreenButton';
import RedButton from '../reusable/RedButton';


function NurseNotification() {
  return (
    <div className="notifications">
      <h2>Recent notifications</h2>
      <div className="notification">
        <div className="notification-content">
          <h3>Dr. Abdul Raheem Naseer is requesting blood</h3>
          <ul>
            <li>Type: A+</li>
            <li>Amount: 550ml</li>
            <li>Hospital: hospital1</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-3 w-3/4">
        <GreenButton text={'Available'}/>
        <RedButton text={'Not Available'}/>
        </div>
      <div className="notification">
        <div className="notification-content">
          <h3>Dr. Seth Ashish is requesting blood</h3>
          <ul>
            <li>Type: AB-</li>
            <li>Amount: 450ml</li>
            <li>Hospital: hospital2</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-3 w-3/4">
        <GreenButton text={'Available'}/>
        <RedButton text={'Not Available'}/>
        </div>
      </div>
      <div className="notification">
        <div className="notification-content">
          <h3>User1 wants to make an appointment</h3>
          <ul>
            <li>Time: 16:00</li>
            <li>Date: 11.11.2024</li>
            <li>Passport ID: AA342535</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-3 w-3/4">
        <GreenButton text={'Accept'}/>
        <RedButton text={'Not Accept'}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default NurseNotification;