import React, { useState } from "react";
import TableData from "../reusable/TableData";
import UserHistoryAcception from "./UserHistoryAcception";
import useGetUserHistory from "../../hooks/useGetUserHistory";
import { Button } from "../ui/button";

const columnData = [
  { label: "Date", key: "created_at" },
  { label: "Status", key: "status" },
  { label: "Hospital Name", key: `hospital[name]` },
  { label: "Quantity", key: "quantity" },
];

const UserHistoryDonation = () => {
  const { donationHistory } = useGetUserHistory();

  const [activePage, setActivePage] = useState("donation");

  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="w-1/2">
        <div className="flex gap-5">
          <Button
            className={`${
              activePage === "donation"
                ? "bg-secondary hover:bg-red-500"
                : "bg-transparent border-solid border-2 hover:bg-white hover:text-black"
            } transition-colors duration-200`}
            onClick={() => handleClick("donation")}
          >
            Donation
          </Button>
          <Button
            className={`${
              activePage === "accepted"
                ? "bg-secondary hover:bg-red-500"
                : "bg-transparent border-solid border-2 hover:bg-white hover:text-black"
            } transition-colors duration-200`}
            onClick={() => handleClick("accepted")}
          >
            Accepted
          </Button>
        </div>
      </div>
      {activePage === "donation" ? (
        <TableData
          columns={columnData}
          rows={donationHistory}
          hasFilter={true}
          filterColumnKey="status"
        />
      ) : (
        <UserHistoryAcception />
      )}
    </div>
  );
};

export default UserHistoryDonation;
