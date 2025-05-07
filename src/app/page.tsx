"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation in the App Router

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /sign-in
    router.push("/login");
  }, [router]);

  return <div>Redirecting...</div>;
};

export default Home;
