import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TabelSearch";
import Table from "@/components/Table";
import { subjectsData } from "@/lib/Data";
import Image from "next/image";
import Link from "next/link";

type Subjects = {
  id: number;
  code: string;
  name: string;
  description: string;
  classes?: string[];
  teachers?: string[];
  image?: string;
};

const columns = [
  { header: "Subject Name", accessor: "name" },
  { header: "Code", accessor: "id", class: "hidden md:table-cell" },
  { header: "Teacher", accessor: "teachers", class: "hidden md:table-cell" },
];

const Subjects = () => {
  const role = "admin"; // Example: Define or fetch role


  const renderRow = (item: Subjects) => (
    <tr key={item.id}>
      <td className="flex items-center gap-4 p-2">
        <Image src={item.image || "/Icons/scoreboard_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"} alt="" width={40} height={40} />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.description}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.id}</td>
      <td className="hidden md:table-cell">{item.teachers}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/subjects/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-200">
              <Image src="/Icons/search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-red-200">
              <Image src="/Icons/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semi-bold">All Subjects</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200">
              <Image src="/Icons/filter_alt_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={13} height={13} />
            </button>
            <FormModal table="subject" type="create" data="default" />
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />
      <Pagination />
    </div>
  );
};

export default Subjects;
