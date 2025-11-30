import React from "react";

const Header = ({ title,  }: { title: string }) => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200 p-8 w-full mb-3">
      <h1 className="text-4xl font-bold text-gray-800 text-center">{title}</h1>
    </div>
  );
};

export default Header;
