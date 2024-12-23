import React, { useEffect, useState } from "react";
import TableData from "../components/reusable/TableData";
import { Trash } from "lucide-react";
import useGetData from "../hooks/useGetData";

const columnData = [
  { label: "ID", key: "id" },
  { label: "Name", key: "name" },
  { label: "Phone", key: "phone" },
  { label: "Hospital", key: "hospital" },
  { label: "Specialization", key: "specialization" },
  // Action column can be added if needed
];

const AdminDoctorManagement = () => {
  const { data, loading, error } = useGetData("get_list_doctor", "doctors");

  useEffect(() => {
    console.log("Fetched doctor data:", data);
  }, [data]);

  if (loading) return <p>Loading doctors...</p>;
  if (error) return <p>Error: {error}</p>;

  // Map the data directly to rowData
  const rowData = Array.isArray(data)
    ? data.map((doctor) => ({
        id: doctor.id || "N/A",
        name: `${doctor.first_name || "N/A"} ${doctor.second_name || "N/A"}`,
        phone: doctor.phone_number || "N/A",
        hospital: doctor.hospital?.name || "N/A", // Access hospital name
        specialization: doctor.specialization || "N/A", // Access specialization
        action: (
          <Trash
            color="#D21F3C"
            className="cursor-pointer"
            size={20}
            onClick={() =>
              console.log(`Delete action for doctor ID: ${doctor.id}`)
            }
          />
        ),
      }))
    : []; // Default to empty array if data is not an array

  if (rowData.length === 0) return <p>No doctors found.</p>;

  return (
    <section className="flex flex-col gap-10">
      <h1 className="font-semibold text-xl">Doctors</h1>
      <TableData columns={columnData} rows={rowData} />
    </section>
  );
};

export default AdminDoctorManagement;
