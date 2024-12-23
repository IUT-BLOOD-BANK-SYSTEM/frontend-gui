// components/AdminHeadNurseManagement.jsx
import React, { useEffect, useState } from "react";
import TableData from "../components/reusable/TableData";
import useGetData from "../hooks/useGetData";

const columnData = [
  { label: "ID", key: "id" },
  { label: "Name", key: "name" },
  { label: "Phone", key: "phone" },
  { label: "Hospital", key: "hospital" },
  // Removed the Action column as delete functionality is not needed
];

const AdminHeadNurseManagement = () => {
  const { data, loading, error } = useGetData(
    "get_list_head_nurse",
    "head_nurses"
  ); // Corrected hook usage
  const [filteredNurses, setFilteredNurses] = useState([]);

  useEffect(() => {
    console.log("Fetched head nurse data:", data);

    if (Array.isArray(data)) {
      setFilteredNurses(data);
    } else if (data && typeof data === "object") {
      // If data is a single object, wrap it in an array
      setFilteredNurses([data]);
    } else {
      setFilteredNurses([]);
      console.warn("Data is not an array or object.");
    }
  }, [data]);

  if (loading) return <p>Loading head nurses...</p>;
  if (error) return <p>Error: {error}</p>;

  const rowData = filteredNurses.map((nurse) => ({
    id: nurse.id || "N/A",
    name: `${nurse.first_name || "N/A"} ${nurse.second_name || "N/A"}`,
    phone: nurse.phone_number || "N/A",
    hospital: nurse.hospital?.name || "N/A", // Access hospital name
    status: nurse.status || "N/A", // Access status
    // Removed the action field as delete functionality is not needed
  }));

  return (
    <section className="flex flex-col gap-10">
      <h1 className="font-semibold text-xl">Head Nurses</h1>
      <TableData columns={columnData} rows={rowData} />
    </section>
  );
};

export default AdminHeadNurseManagement;
