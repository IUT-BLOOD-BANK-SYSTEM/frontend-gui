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
