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
    <Table className="text-base">
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
