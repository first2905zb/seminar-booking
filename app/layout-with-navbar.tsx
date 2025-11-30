import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";

interface LayoutWithNavbarProps {
  children: React.ReactNode;
  title: string;
}

export default function LayoutWithNavbar({
  children,
  title,
}: LayoutWithNavbarProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header title={title} />
      <Navbar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
