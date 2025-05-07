"use client"
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";



interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

const SignupPage = () => {
  const router=useRouter();
  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Signup successful!");
        // Redirect or take other actions after signup
      router.push("/dashboard/admin")
      console.log(router)
      } else {
        setMessage(data.message || "Signup failed");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error: Could not complete signup");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition"
        >
          Sign Up
        </button>
        <Link href="/login" className="w-full">login in</Link>

        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </form>
    </div>
  );
};

export default SignupPage;
