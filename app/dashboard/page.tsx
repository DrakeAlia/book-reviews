import { redirect } from "next/navigation";
import React from "react";

const DashboardPage: React.FC = () => {
  const isAuthenticated = true; // Replace with your authentication logic

  if (!isAuthenticated) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Dashboard!</h1>
      {/* Add your dashboard content here */}
    </div>
  );
};

export default DashboardPage;
