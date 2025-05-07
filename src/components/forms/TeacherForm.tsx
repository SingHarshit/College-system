"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import InputField from "../InputField";

const schema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters." })
      .max(20, { message: "Username must be at most 20 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required." })
      .refine((value, ctx) => value === ctx.parent.password, {
        message: "Passwords do not match.",
      }),
    firstName: z.string().min(1, { message: "First name is required." }),
    lastName: z.string().min(1, { message: "Last name is required." }),
    phone: z.string().min(1, { message: "Phone number is required." }),
    address: z.string().min(1, { message: "Address is required." }),
    birthday: z.string().min(1, { message: "Birthday is required." }),
  })
  .strict();

type TeacherFormProps = {
  type: "create" | "update";
  data?: any;
};

const TeacherForm = ({ type, data }: TeacherFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: type === "update" ? data : {},
  });

  const onSubmit = handleSubmit((formData) => {
    console.log(formData);
    // Handle create or update teacher logic here
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create New Teacher" : "Update Teacher"}
      </h1>
      <span className="text-xs text-gray-500 font-medium">Authentication</span>

      <InputField
        label="Username"
        name="username"
        register={register}
        error={errors.username}
      />

      <InputField
        label="Email"
        name="email"
        register={register}
        error={errors.email}
      />

      <InputField
        label="Password"
        name="password"
        type="password"
        register={register}
        error={errors.password}
      />

      <InputField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        register={register}
        error={errors.confirmPassword}
      />

      <span className="text-xs text-gray-400 font-medium">Personal Info</span>

      <InputField
        label="First Name"
        name="firstName"
        register={register}
        error={errors.firstName}
      />

      <InputField
        label="Last Name"
        name="lastName"
        register={register}
        error={errors.lastName}
      />

      <InputField
        label="Phone"
        name="phone"
        register={register}
        error={errors.phone}
      />

      <InputField
        label="Address"
        name="address"
        register={register}
        error={errors.address}
      />

      <InputField
        label="Birthday"
        name="birthday"
        type="date"
        register={register}
        error={errors.birthday}
      />

      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
