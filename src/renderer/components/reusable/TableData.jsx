import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const TableData = ({ columns, rows }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableHead key={index}>{column.label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={row.id || rowIndex}>
            {columns.map((column, colIndex) => (
              <TableCell key={colIndex}>
                {column.key === "status" && (
                  <span
                    className={`w-2.5 h-2.5 rounded-full mr-2 inline-block ${
                      row[column.key] === "Successful" || row[column.key] === "Approved"
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
  );
};

export default TableData;
