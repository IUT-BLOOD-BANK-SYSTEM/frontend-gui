import React from "react";
import { Button } from "../ui/button";

const notifications = [
  {
    title: "Dr. Abdul Raheem Naseer is requesting blood",
    time: "15:30",
    details: [
      { label: "Type", value: "A+" },
      { label: "Amount", value: "550ml" },
      { label: "Hospital", value: "hospital1" },
    ],
    actions: {
      accept: "Available",
      reject: "Not available",
    },
  },
  {
    title: "Dr. Seth Ashish is requesting blood",
    time: "16:30",
    details: [
      { label: "Type", value: "AB-" },
      { label: "Amount", value: "450ml" },
      { label: "Hospital", value: "hospital2" },
    ],
    actions: {
      accept: "Available",
      reject: "Not available",
    },
  },
  {
    title: "User1 wants to make an appointment",
    time: "16:30",
    details: [
      { label: "Time", value: "16:00" },
      { label: "Date", value: "11.11.2024" },
      { label: "Passport ID", value: "AA342535" },
    ],
    actions: {
      accept: "Accept",
      reject: "Reject",
    },
  },
];

export default function NurseNotification() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-8">Recent notifications</h2>
      <div className="space-y-6">
        {notifications.map((notification, index) => (
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
                  <h3 className="font-medium">{notification.title}</h3>
                  <dl className="space-y-1">
                    {notification.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-gray-400">
                        {detail.label}: {detail.value}
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="flex flex-col items-end gap-y-10">
                  <time className="text-sm text-gray-400">
                    {notification.time}
                  </time>
                  {/* Action Buttons */}
                  <div className="mt-4 flex gap-3">
                    <Button className="bg-success hover:bg-emerald-600">
                      {notification.actions.accept}
                    </Button>
                    <Button
                      variant="destructive"
                      className="bg-secondary hover:bg-red-700"
                    >
                      {notification.actions.reject}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
