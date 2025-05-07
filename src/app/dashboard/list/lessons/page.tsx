import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TabelSearch";
import Table from "@/components/Table";
import { lessonsData } from "@/lib/Data";
import Image from "next/image";
import Link from "next/link";

type Lesson = {
  id: number;
  lessonId: string;
  title: string;
  teacher: string;
  email?: string;
  schedule: string; // E.g., "Monday 10:00 AM - 12:00 PM"
  studentsEnrolled: number;
  description: string;
  image?: string;
};

const columns = [
  { header: "Lesson Info", accessor: "title" },
  { header: "Lesson ID", accessor: "lessonId", class: "hidden md:table-cell" },
  { header: "Teacher", accessor: "teacher", class: "hidden md:table-cell" },
  { header: "Schedule", accessor: "schedule", class: "hidden md:table-cell" },
  {
    header: "Students Enrolled",
    accessor: "studentsEnrolled",
    class: "hidden md:table-cell",
  },
  { header: "Description", accessor: "description", class: "hidden md:table-cell" },
];

const LessonListPage = () => {
  const role = "admin"; // Example: Define or fetch the user's role

  const renderRow = (item: Lesson) => (
    <tr key={item.id}>
      <td className="flex items-center gap-4 p-2">
        <Image
          src={item.image || "/Icons/school_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"}
          alt="Lesson Image"
          width={40}
          height={40}
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.title}</h3>
          <p>{item.email || "N/A"}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.lessonId}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.schedule}</td>
      <td className="hidden md:table-cell">{item.studentsEnrolled}</td>
      <td className="hidden md:table-cell">{item.description}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/lessons/${item.id}`}>
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
        <h1 className="hidden md:block text-lg font-semibold">All Lessons</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200">
            <Image src="/filter.png" alt="Filter" width={13} height={13} />
          </button>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />
      <Pagination />
    </div>
  );
};

export default LessonListPage;
