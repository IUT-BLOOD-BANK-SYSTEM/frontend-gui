import React, { useState } from "react";
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

  // Get unique filter values for dropdown (only for the specific column if `filterColumnKey` is provided)
  const uniqueFilterValues = filterColumnKey
    ? [
        "All",
        ...new Set(rows.map((row) => row[filterColumnKey]).filter(Boolean)),
      ]
    : [];

  // Universal search across all columns
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const searchedRows = rows.filter((row) =>
      columns.some((col) => row[col.key]?.toString().includes(term))
    );

    // Apply filter if active
    if (filterValue === "All") {
      setFilteredRows(searchedRows);
    } else if (filterColumnKey) {
      setFilteredRows(
        searchedRows.filter((row) => row[filterColumnKey] === filterValue)
      );
    }
  };

  // Filtering rows by the dropdown
  const handleFilterChange = (value) => {
    setFilterValue(value);

    if (value === "All") {
      setFilteredRows(rows);
    } else {
      setFilteredRows(rows.filter((row) => row[filterColumnKey] === value));
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
          onChange={handleSearchChange}
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
                        row[column.key] === "Successful" ||
                        row[column.key] === "Approved" ||
                        row[column.key] === "Available"
                          ? "bg-green-500"
                          : row[column.key] === "Pending"
                          ? "bg-gray-500"
                          : "bg-red-500"
                      }`}
                    ></span>
                  )}
                  {row[column.key] !== undefined ? row[column.key] : "N/A"}
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
