import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Node = {
  id: number;
  name: string;
  address: string;
  location: string;
}

const  columns: string[] = ["id", "name", "address", "location"];

const nodes: Node[] = [
  { id: 1, name: "Node 1", address: "123 Main St", location: "New York" },
  { id: 2, name: "Node 2", address: "456 Elm St", location: "Los Angeles" },
  { id: 3, name: "Node 3", address: "789 Oak St", location: "Chicago" },
]

export default function HomePage() {
  return (
    <div className="h-full grid place-content-center">
      <div className="border rounded-lg mt-6 w-[30vw]">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column}>{column}</TableHead>
              ))}            
            </TableRow>
          </TableHeader>
          <TableBody>
            {nodes.map((node) => (
              <TableRow key={node.id}>
                <TableCell>{node.id}</TableCell>
                <TableCell>{node.name}</TableCell>
                <TableCell>{node.address}</TableCell>
                <TableCell>{node.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}