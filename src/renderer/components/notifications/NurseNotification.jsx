import React from "react";
import { Button } from "../ui/button";
import useGetNotification from "../../hooks/useGetNotification";
import { toast } from "sonner";

export default function NurseNotification() {
  const { Notification } = useGetNotification();

  if (!Notification || Notification.length === 0) {
    return <div className="p-8 text-gray-500">No notifications available.</div>;
  }

  const extractNotificationDetails = (message, type) => {
    if (type === "doctor_request") {
      const matches = message.match(
        /(\w+\s+\w+) is requesting blood : Type:([^\s]+) Amount:([^\s]+) Hospital:(.+)/
      );
      if (matches) {
        return {
          sender: matches[1],
          bloodType: matches[2],
          amount: matches[3],
          hospital: matches[4],
        };
      }
    } else {
      const matches = message.match(
        /(\w+\s+\w+) wants to make an appointment: date:([^\s]+) PassportNumber:([^\s]+)/
      );
      if (matches) {
        return {
          sender: matches[1],
          date: matches[2],
          passportNumber: matches[3],
        };
      }
    }
    return null;
  };

  const handleAction = (action, type, senderId, headNurseId) => {
    const payload = {
      status: action,
      ...(type === "doctor_request" && { doctor_id: senderId }),
      ...(type === "user_request" && {
        donor_id: senderId,
      }),
      head_nurse_id: headNurseId,
    };

    const messageType =
      type === "doctor_request" ? "update_blood_request" : "update_appointment";

    window.electron.sendTCPMessage({
      type: messageType,
      payload: payload,
    });

    window.electron.onTCPMessage((response) => {
      if (response.type !== messageType) return;
      if (response.status === "success") {
        toast.success(
          `${type === "doctor_request" ? "Blood request" : "Appointment"} ${
            payload.status
          } successfully`
        );
      } else {
        toast.error(
          `Failed to update ${
            type === "doctor_request" ? "blood request" : "appointment"
          }`
        );
      }
    });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-8">Recent notifications</h2>
      <div className="space-y-6">
        {Notification.map((notif) => {
          const details = extractNotificationDetails(notif.message, notif.type);
          if (!details) return null;

          return (
            <div
              key={notif.id}
              className="relative flex items-start gap-4 rounded-lg bg-gray-950/10 p-6"
            >
              {/* Status Indicator */}
              <div className="absolute left-4 top-8 h-2 w-2 rounded-full bg-emerald-500" />

              {/* Content */}
              <div className="flex-1 pl-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">
                      {details.sender}
                      {notif.type === "doctor_request"
                        ? " is requesting blood"
                        : " wants to make an appointment"}
                    </h3>
                    <dl className="space-y-1 text-sm text-gray-400">
                      {notif.type === "doctor_request" ? (
                        <>
                          <div>Type: {details.bloodType}</div>
                          <div>Amount: {details.amount}</div>
                          <div>Hospital: {details.hospital}</div>
                        </>
                      ) : (
                        <>
                          <div>
                            Date: {details.date.split("T")[0]} ,{" "}
                            {details.date.split("T")[1].slice(0, 5)}
                          </div>
                          <div>Passport Number: {details.passportNumber}</div>
                        </>
                      )}
                    </dl>
                  </div>

                  <div className="flex flex-col items-end gap-y-4">
                    <time className="text-sm text-gray-400">
                      {notif.formatted_time}
                    </time>
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        className="bg-emerald-600 hover:bg-emerald-700"
                        onClick={() =>
                          handleAction(
                            notif.type === "doctor_request"
                              ? "available"
                              : "accepted",
                            notif.type,
                            notif.sender_id,
                            notif.recipient_id
                          )
                        }
                      >
                        {notif.type === "doctor_request"
                          ? "Available"
                          : "Accept"}
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() =>
                          handleAction(
                            notif.type === "doctor_request"
                              ? "unavailable"
                              : "rejected",
                            notif.type,
                            notif.sender_id,
                            notif.recipient_id
                          )
                        }
                      >
                        {notif.type === "doctor_request"
                          ? "Not available"
                          : "Reject"}
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
