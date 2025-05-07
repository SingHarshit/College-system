import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TabelSearch";
import Table from "@/components/Table";
import { parentsData } from "@/lib/Data";
import Image from "next/image";
import Link from "next/link";

type Parent = {
  id: number;
  parentId: string;
  name: string;
  email?: string;
  phone?: string;
  subjects?: string[];
  classes?: string[];
  info: string;
  address?: string;
  image?: string;
};

const columns = [
  { header: "Info", accessor: "info" },
  { header: "Parent ID", accessor: "parentId", class: "hidden md:table-cell" },
  { header: "Subjects", accessor: "subjects", class: "hidden md:table-cell" },
  { header: "Classes", accessor: "classes", class: "hidden md:table-cell" },
  { header: "Phone", accessor: "phone", class: "hidden md:table-cell" },
  { header: "Address", accessor: "address", class: "hidden md:table-cell" },
];

const ParentListPage = () => {
  const role = "admin"; // Example: Define or fetch the user's role

  const renderRow = (item: Parent) => (
    <tr key={item.id}>
      <td className="flex items-center gap-4 p-2">
        <Image
          src={item.image || "/default-parent.png"}
          alt="Parent Image"
          width={40}
          height={40}
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p>{item.email || "N/A"}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.parentId}</td>
      <td className="hidden md:table-cell">
        {item.subjects ? item.subjects.join(", ") : "N/A"}
      </td>
      <td className="hidden md:table-cell">
        {item.classes ? item.classes.join(", ") : "N/A"}
      </td>
      <td className="hidden md:table-cell">{item.phone || "N/A"}</td>
      <td className="hidden md:table-cell">{item.address || "N/A"}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/parents/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-200">
              <Image src="/Icons/visibility_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="View" width={16} height={16} />
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
        <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200">
            <Image src="/Icons/filter_alt_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="Filter" width={13} height={13} />
          </button>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={parentsData} />
      <Pagination />
    </div>
  );
};

export default ParentListPage;
