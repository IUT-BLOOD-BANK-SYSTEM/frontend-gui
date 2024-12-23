import React from "react";
import { Button } from "../ui/button";
import UseGetNotification from "../../hooks/UseGetNotification";

export default function NurseNotification() {
  const { Notification } = UseGetNotification(); // Destructure setNotification from the hook
  console.log(Notification);

  if (!Notification || Notification.length === 0) {
    return <div>No notifications available.</div>;
  }

  // Handle Doctor notification
  const handleDoctorNotif = () => {};

  // Handle User Notification
  const handleUserNotif = () => {};

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-8">Recent notifications</h2>
      <div className="space-y-6">
        {Notification.map((notif, index) => {
          // Extract details from the message
          const message = notif.message;
          const sender = message.split(" ")[0] + " " + message.split(" ")[1]; // Sender name
          const appointmentDetails = message.match(
            /date:([^\s]+) PassportNumber:([^\s]+)/ // Extract date and passport number
          );
          const appointmentDate = appointmentDetails
            ? appointmentDetails[1]
            : "N/A";
          const passportNumber = appointmentDetails
            ? appointmentDetails[2]
            : "N/A";

          return (
            <div
              key={index}
              className="relative flex items-start gap-4 rounded-lg"
            >
              {/* Status Indicator */}
              <div className="absolute left-0 top-2.5 h-2 w-2 rounded-full bg-success" />

              {/* Content */}
              <div className="flex-1 pl-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-4">
                    <h3 className="font-medium">
                      {sender.charAt(0).toUpperCase() + sender.slice(1)} wants
                      to make an appointment
                    </h3>
                    <dl className="space-y-1">
                      <div className="text-gray-400">
                        Date: {new Date(appointmentDate).toLocaleString()}
                      </div>
                      <div className="text-gray-400">
                        Passport Number: {passportNumber}
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-col items-end gap-y-10">
                    <time className="text-sm text-gray-400">
                      {new Date(notif.created_at).toLocaleString()}
                    </time>
                    {/* Action Buttons */}
                    <div className="mt-4 flex gap-3">
                      <Button
                        className="bg-success hover:bg-emerald-600"
                        onClick={() => handleAccept(notif.id)}
                      >
                        Accept
                      </Button>
                      <Button
                        variant="destructive"
                        className="bg-secondary hover:bg-red-700"
                        onClick={() => handleDelete(notif.id)}
                      >
                        Reject
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
