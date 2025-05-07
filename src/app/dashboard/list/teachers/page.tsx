import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TabelSearch";
import Table from "@/components/Table";
import { teachersData } from "@/lib/Data";

import Image from "next/image";
import Link from "next/link";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  phone?: string;
  subjects?: string[];
  classes?: string[];
  info: string;
  attendance?: {
    present: number;
    absent: number;
    percentage: number;
  };
  image?: string;
};

const columns = [
  { header: "Info", accessor: "info" },
  { header: "Teacher ID", accessor: "teacherId", class: "hidden md:table-cell" },
  { header: "Subjects", accessor: "subjects", class: "hidden md:table-cell" },
  { header: "Classes", accessor: "classes", class: "hidden md:table-cell" },
  { header: "Phone", accessor: "phone", class: "hidden md:table-cell" },
];

const TeacherListPage = () => {
  const role = "admin"; 
  
  const renderRow = (item: Teacher) => (
    <tr key={item.id}>
      <td className="flex items-center gap-4 p-2">
        <Image src={item.image || "/Icons/group_add_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"} alt="" width={40} height={40} />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="font-semibold">{item.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects?.join(", ")}</td>
      <td className="hidden md:table-cell">{item.classes?.join(", ")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-200">
              <Image src="/Icons/visibility_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={16} height={16} />
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
        <h1 className="hidden md:block text-lg font-semi-bold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
         <TableSearch/>
          <div className="flex items-center gap-4">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200">
              <Image src="/Icons/filter_alt_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={13} height={13} />
            </button>
            <FormModal table="teacher" type="create" data="default" />
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={teachersData} />
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
