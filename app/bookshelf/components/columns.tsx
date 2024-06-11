"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableRowActions } from "./data-table-row-actions";

import { DataTableColumnHeader } from "./data-table-column-header";
import type { Review } from "@prisma/client";
import type { Book } from "@prisma/client";

import Link from "next/link";

export const columns: ColumnDef<Book>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      const bookId = row.original.id;
      return (
        <div className="flex space-x-2">
          <Link href={`/bookshelf/books/${bookId}`}>
            <div className="max-w-[500px] truncate font-medium">
              {row.getValue("title")}
            </div>
          </Link>
        </div>
      );
    },
    filterFn: (row, id, filterValue) => {
      const rowValue = row.getValue(id);
      if (typeof rowValue === "string" && typeof filterValue === "string") {
        return rowValue.toLowerCase().includes(filterValue.toLowerCase());
      }
      if (typeof rowValue === "number" && typeof filterValue === "string") {
        return rowValue.toString() === filterValue;
      }
      return false;
    },
  },
  {
    accessorKey: "author",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Author" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("author")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "genre",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Genre" />
    ),
    cell: ({ row }) => {
      const genre = row.getValue("genre");

      return (
        <div className="flex items-center">
          <span>{genre as React.ReactNode}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "reviewCount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reviews" />
    ),
    cell: ({ row }) => {
      interface Book {
        id: string;
        title: string;
        author: string;
        genre: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        reviews?: any[]; // Add the reviews property with the appropriate type
      }
      const reviewCount = (row.original as Book).reviews?.length || 0;
      return (
        <div className="flex items-center space-x-2">
          {/* <Link href={`/bookshelf/books/${row.original.id}`}>
            <span className="font-medium">{reviewCount}</span>
          </Link> */}
          <span>{reviewCount}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
