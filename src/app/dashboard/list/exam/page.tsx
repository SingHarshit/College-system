import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TabelSearch";
import Table from "@/components/Table";
import { examsData } from "@/lib/Data";

import Image from "next/image";
import Link from "next/link";

type Exam = {
  id: number;
  examId: string;
  title: string;
  subject: string;
  date: string; // E.g., "2024-12-01"
  teacher: string; // E.g., "10:00 AM - 1:00 PM"
  totalMarks: number;
  class: string;
  image?: string;
};

const columns = [
  { header: "Exam Info", accessor: "title" },
  { header: "Exam ID", accessor: "id", class: "hidden md:table-cell" },
  { header: "Subject", accessor: "subject", class: "hidden md:table-cell" },
  { header: "Date", accessor: "date", class: "hidden md:table-cell" },
  { header: "Class", accessor: "class", class: "hidden md:table-cell" },
 
  
];

const ExamListPage = () => {
  const role = "admin"; // Example: Define or fetch the user's role

  const renderRow = (item: Exam) => (
    <tr key={item.id}>
      <td className="flex items-center gap-4 p-2">
        <Image
          src={item.image || "/Icons/menu_book_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"}
          alt="Exam Image"
          width={40}
          height={40}
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.title}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.id}</td>
      <td className="hidden md:table-cell">{item.subject}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.class}</td>
     
     
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/exams/${item.id}`}>
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
        <h1 className="hidden md:block text-lg font-semibold">All Exams</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200">
            <Image src="/Icons/filter_alt_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="Filter" width={13} height={13} />
          </button>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={examsData} />
      <Pagination />
    </div>
  );
};

export default ExamListPage;
