import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { ArrowDownWideNarrow } from "lucide-react";

const TableData = ({
  columns,
  rows,
  filterColumnKey = null,
  hasFilter = true,
}) => {
  const [filteredRows, setFilteredRows] = useState(rows);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("All");

  const uniqueFilterValues = filterColumnKey
    ? [
        "All",
        ...new Set(rows.map((row) => row[filterColumnKey]).filter(Boolean)),
      ]
    : [];

  const handleFilterChange = (value) => {
    setFilterValue(value);

    if (value === "All") {
      setFilteredRows(rows);
    } else {
      setFilteredRows(rows.filter((row) => row[filterColumnKey] === value));
    }
  };

  useEffect(() => {
    const filteredBySearch = rows.filter((row) =>
      columns.some((col) => {
        const value = getNestedValue(row, col.key); // Get value using the nested getter
        return value !== undefined && value !== null
          ? value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          : false; // Case-insensitive match
      })
    );

    if (filterValue === "All") {
      setFilteredRows(filteredBySearch);
    } else if (filterColumnKey) {
      setFilteredRows(
        filteredBySearch.filter((row) => row[filterColumnKey] === filterValue)
      );
    }
  }, [rows, filterValue, searchTerm, filterColumnKey]);

  const getNestedValue = (obj, key) => {
    if (key === "doctorName") {
      return `${obj.doctor?.first_name || ""} ${obj.doctor?.second_name || ""}`.trim();
    }
    if (key === "headNurseName") {
      return `${obj.head_nurse?.first_name || ""} ${obj.head_nurse?.second_name || ""}`.trim();
    }

    if (!key.includes("[")) return obj[key]; // Handle simple keys.

    return key
      .split(/\.|\[|\]/)
      .filter(Boolean)
      .reduce((acc, curr) => acc && acc[curr], obj);
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    } catch {
      return dateString;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-end mb-4 gap-4">
        {/* Dropdown Filter (Only if `filterColumnKey` is defined) */}
        {hasFilter && filterColumnKey && (
          <div className="relative w-[200px]">
            <h1 className="mb-1 text-base font-semibold">
              Filter by {filterColumnKey}
            </h1>
            <select
              value={filterValue}
              onChange={(e) => handleFilterChange(e.target.value)}
              className="bg-[#747775] text-white px-6 py-2 rounded-md w-full focus:outline-none hover:bg-[#919292] appearance-none"
            >
              {uniqueFilterValues.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <span className="absolute right-4 top-[48px] transform -translate-y-1/2 pointer-events-none">
              <ArrowDownWideNarrow />
            </span>
          </div>
        )}

        {/* Universal Search Bar */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by anything..."
          className="border border-gray-300 rounded-md px-4 py-2 w-full text-black max-w-md focus:outline-none "
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column, index) => (
              <TableHead key={index}>{column.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRows.map((row, rowIndex) => (
            <TableRow key={row.id || rowIndex}>
              {columns.map((column, colIndex) => (
                <TableCell key={colIndex}>
                  {column.key === "status" && (
                    <span
                      className={`w-2.5 h-2.5 rounded-full mr-2 inline-block ${
                        getNestedValue(row, column.key) === "Successful" ||
                        getNestedValue(row, column.key) === "Approved" ||
                        getNestedValue(row, column.key) === "Available"
                          ? "bg-green-500"
                          : getNestedValue(row, column.key) === "Pending"
                          ? "bg-gray-500"
                          : "bg-red-500"
                      }`}></span>
                  )}
                  {column.key.includes("date")
                    ? formatDate(getNestedValue(row, column.key))
                    : getNestedValue(row, column.key) !== undefined
                    ? getNestedValue(row, column.key)
                    : "N/A"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableData;
