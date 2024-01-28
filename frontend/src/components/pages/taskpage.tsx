import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

import { FaPersonRifle } from "react-icons/fa6";

export default function TaskPage({ profiles }: { profiles: any[] }) {
  const [tasks, setTasks] = useState(profiles);

  return (
    <div className="mx-5 pt-5">
      <p className="text-3xl font-bold ">
        Tasks <span className="text-surface2">({tasks.length})</span>
      </p>

      <Table className="bg-surface0 rounded-xl mt-5 border-separate border border-surface1">
        <TableHeader>
          <TableHead>Name</TableHead>
          <TableHead>Searches</TableHead>
          <TableHead>Drop</TableHead>
          <TableHead>Actions</TableHead>
        </TableHeader>

        <TableBody>
          {tasks.map((p, i) => {
            return (
              <TableRow>
                <TableCell>{p.n}</TableCell>
                <TableCell>{p.v}</TableCell>
                <TableCell>{p.s}</TableCell>
                <TableCell>
                  <button
                    onClick={() => setTasks(tasks.filter((_, j) => j !== i))}
                    className="flex items-center gap-1 cursor-pointer rounded shadow text-crust bg-red w-18 p-1"
                  >
                    <FaPersonRifle />
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
