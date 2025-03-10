import ProtectedRoutes from "@/utils/protectedRoutes";
import React from "react";

export default function Dashboard() {
  return (
    <ProtectedRoutes>
      <div>Dashboard</div>
    </ProtectedRoutes>
  );
}
