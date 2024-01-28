import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { FaPersonRifle } from "react-icons/fa6";

export default function TaskTable({ profiles }: { profiles: any[] }) {
  return (
    <div className="mx-5 pt-5">
      <p className="text-3xl font-bold ">
        Dropping <span className="text-surface2">({profiles.length})</span>
      </p>

      <Table className="bg-surface0 rounded-xl mt-5 border-separate border border-surface1">
        <TableHeader>
          <TableHead>Name</TableHead>
          <TableHead>Drop</TableHead>
          <TableHead>Searches</TableHead>
          <TableHead>Actions</TableHead>
        </TableHeader>

        <TableBody>
          {profiles.map((p) => {
            return (
              <TableRow>
                <TableCell>{p.n}</TableCell>
                <TableCell>{p.v}</TableCell>
                <TableCell>{p.s}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 cursor-pointer rounded shadow text-crust bg-red w-16 p-1">
                    <FaPersonRifle />
                    Snipe
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
