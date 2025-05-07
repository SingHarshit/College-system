"use client";

import Image from "next/image";
import { useState } from "react";
import TeacherForm from "./forms/TeacherForm";

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "assignment"
    | "event"
    | "attendance"
    | "result";
  type: "create" | "edit" | "delete";
  data: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-10 h-10" : "w-8 h-8";
  const bgColor =
    type === "create"
      ? "bg-blue-200 hover:bg-blue-300"
      : type === "edit"
      ? "bg-yellow-200 hover:bg-yellow-300"
      : "bg-red-200 hover:bg-red-300";

  const [open, setOpen] = useState(false);

  const Form = () => {
    if (type === "delete" && id) {
      return (
        <form className="p-4 flex flex-col gap-4">
          <span className="text-sm text-gray-700">
            Are you sure you want to delete this {table}? All associated data
            will be permanently lost.
          </span>
          <button
            type="button"
            className="bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-800"
          >
            Delete
          </button>
        </form>
      );
    }
    return <TeacherForm type="create" />;
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor} shadow-md transition-all`}
        onClick={() => setOpen(true)}
      >
        <Image src="/Icons/add_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt={type} width={16} height={16} />
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md relative w-[90%] md:w-[70%] lg:w-[50%] shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setOpen(false)}
            >
              <Image src="/Icons/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="Close" width={14} height={14} />
            </button>
            {/* Modal Content */}
            <Form />
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
