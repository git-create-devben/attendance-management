import { Button } from "@/components/ui/button";
import { generateDateHeaders } from "@/utils/generateDateHeaders";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
export type StudentType = {
  id: string;
  name: string;
  attendance: Record<string, string>;
};



export const columns = (selectedMonth: Date): ColumnDef<StudentType>[] => [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Student Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  ...generateDateHeaders(selectedMonth).headers.map((dateColumn) => ({
    accessorKey: dateColumn.accessorKey,
    header: dateColumn.header,
    cell: ({ row }: { row: { original: StudentType } }) => {
      const attendance = row.original.attendance || {};
      return attendance[dateColumn.accessorKey]?.toLowerCase() === "present" ? "✅" : "❌";
    },
  })),
];
