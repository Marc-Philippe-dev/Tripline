
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/me`,
          {
            method: "GET",
            credentials: "include", // Include cookies
          }
        );

        if (!res.ok) throw new Error("Not authenticated");

        setIsAuthenticated(true);
      } catch (error) {
        console.error("Auth error:", error);
        setIsAuthenticated(false);
        router.push("/login"); // Redirect only when necessary
      }
    };

    fetchUser(); 
  }, []);

  // Show a loading state instead of immediately redirecting
  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

  return <>{isAuthenticated ? children : null}</>;
};

export default ProtectedRoutes;
