import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const bloodTypes = [
  { label: "O-", value: "O-" },
  { label: "O+", value: "O+" },
  { label: "A+", value: "A+" },
  { label: "A-", value: "A-" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
  { label: "AB+", value: "AB+" },
  { label: "AB-", value: "AB-" },
];

export const hospitals = [
  { value: "", label: "Select an option" },
  { value: "1", label: "Hospital 1" },
  { value: "2", label: "Hospital 2" },
  { value: "3", label: "Hospital 3" },
  { value: "4", label: "Hospital 4" },
  { value: "5", label: "Hospital 5" },
  { value: "6", label: "Hospital 6" },
  { value: "7", label: "Hospital 7" },
  { value: "8", label: "Hospital 8" },
];

export const bloodRequestData = [
  {
    id: 1,
    date: "28.10.2024",
    time: "15:00",
    status: "Successfull",
    bloodType: "A+",
    patient: "Jude Bellingham",
    doctor: "Dr. Agostini",
    amount: "450ml",
  },

  {
    id: 2,
    date: "28.10.2024",
    time: "15:00",
    status: "Successfull",
    bloodType: "A+",
    patient: "Jude Bellingham",
    doctor: "Dr. Agostini",
    amount: "450ml",
  },

  {
    id: 3,
    date: "28.10.2024",
    time: "15:00",
    status: "Successfull",
    bloodType: "A+",
    patient: "Jude Bellingham",
    doctor: "Dr. Agostini",
    amount: "450ml",
  },

  {
    id: 4,
    date: "28.10.2024",
    time: "15:00",
    status: "Successfull",
    bloodType: "A+",
    patient: "Jude Bellingham",
    doctor: "Dr. Agostini",
    amount: "450ml",
  },

  {
    id: 5,
    date: "28.10.2024",
    time: "15:00",
    status: "Successfull",
    bloodType: "A+",
    patient: "Jude Bellingham",
    doctor: "Dr. Agostini",
    amount: "450ml",
  },
];
