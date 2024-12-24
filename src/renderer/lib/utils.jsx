import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const bloodTypes = [
  { value: "7044dae4-b87c-4af5-b850-b9fc1e8b5d71", label: "A+" },
  { value: "ef785e0e-32d0-4cb2-be90-34d092d7102e", label: "A-" },
  { value: "b65b5031-b15f-49c9-bdf7-285363410fef", label: "B+" },
  { value: "46d75fea-5e67-46b9-bd5d-db252eabbd53", label: "B-" },
  { value: "deb13e7e-4a0c-4027-852d-5f1de751c846", label: "O+" },
  { value: "c0894f99-4112-407f-b9b2-b3231c2287f4", label: "O-" },
  { value: "c2122d42-4a17-425d-94b6-36ce3955a674", label: "AB+" },
  { value: "14fe9fa8-63c3-4b79-8177-ccf87f4af451", label: "AB-" },
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
