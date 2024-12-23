import { Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import TableData from "../components/reusable/TableData";
import useGetData from "../hooks/useGetData";

const columnData = [
  { label: "ID", key: "id" },
  { label: "Name", key: "name" },
  { label: "Phone", key: "phone" },
  { label: "Blood type", key: "bloodType" },
];

const AdminUserManagement = () => {
  const { data: users, loading, error } = useGetData("get_list_user", "users");

  const rowData = Array.isArray(users)
    ? users.map((user) => ({
        id: user.id || "N/A",
        name: `${user.first_name || "N/A"} ${user.second_name || "N/A"}`.trim(),
        phone: user.phone_number || "N/A",
        bloodType: user.blood_type?.bloods_type || "N/A",
        action: (
          <Trash
            color="#D21F3C"
            className="cursor-pointer"
            size={20}
            onClick={() => {
              if (
                window.confirm(
                  `Are you sure you want to delete user ID: ${user.id}?`
                )
              ) {
                console.log(`Delete action for user ID: ${user.id}`);
                // Implement deletion logic here
              }
            }}
          />
        ),
      }))
    : [];

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="flex flex-col gap-10">
      <h1 className="font-semibold text-xl">Users</h1>
      <TableData columns={columnData} rows={rowData} loading={loading} />
    </section>
  );
};

export default AdminUserManagement;
