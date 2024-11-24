import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div>
      <Button variant="destructive">Button</Button>
      <Link to="/dashboard/history">
        <h1 className="font-bold">History</h1>
      </Link>
    </div>
  );
};
