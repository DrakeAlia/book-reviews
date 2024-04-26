"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";
import { DataTableFacetedFilter } from "./data-table-facted-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter books..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            const value = event.target.value;
            const column = table.getColumn("title");

            if (column) {
              if (/^\d+$/.test(value)) {
                // Value is a valid number
                const numberValue = parseInt(value, 10);
                column.setFilterValue((old: any) => {
                  if (old instanceof Array) {
                    return [numberValue];
                  }
                  return numberValue;
                });
              } else {
                // Value is a string
                column.setFilterValue(value);
              }
            }
          }}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("genre") && (
          <DataTableFacetedFilter
            column={table.getColumn("genre")}
            title="Genre"
            options={[
              { label: "Fiction", value: "fiction" },
              { label: "Non-fiction", value: "non-fiction" },
            ]}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
