import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TabelSearch";
import Table from "@/components/Table";
import { classesData } from "@/lib/Data";
import Image from "next/image";
import Link from "next/link";

type Class = {
  id: number;
  classId: string;
  name: string;
  capacity: string;
 grade:string // E.g., "Monday 10:00 AM - 12:00 PM"
  supervisor:string;
  description: string;
  image?: string;
};

const columns = [
  { header: "Class Info", accessor: "name" },
  { header: "Class ID", accessor: "id", class: "hidden md:table-cell" },
  { header: "Capacity", accessor: "capacity", class: "hidden md:table-cell" },
  { header: "Grade", accessor: "grade", class: "hidden md:table-cell" },
  {header: "Supervisor", accessor: "supervisor", class: "hidden md:table-cell" },

];

const ClassListPage = () => {
  const role = "admin";

  const renderRow = (item: Class) => (
    <tr key={item.id}>
      <td className="flex items-center gap-4 p-2">
        <Image
          src={item.image || "/Icons/menu_book_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"}
          alt="Class Image"
          width={40}
          height={40}
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.id}</td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>
      
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/classes/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-200">
              <Image src="/Icons/school_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="View" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-red-200">
              <Image src="/Icons/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="Delete" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200">
            <Image src="/Icons/search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="Filter" width={13} height={13} />
          </button>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={classesData} />
      <Pagination />
    </div>
  );
};

export default ClassListPage;
