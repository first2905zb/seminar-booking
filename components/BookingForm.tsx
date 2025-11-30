"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/bookings", {
      method: "POST",
      body: JSON.stringify({ name, email }),
    });
    const data = await res.json();
    if (res.ok) {
      toast.success(data.message);
      setName("");
      setEmail("");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-md w-full gap-4 bg-white p-6 rounded shadow"
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 rounded h-12 p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-800"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 rounded h-12 p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-800"
        required
      />
      <button className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600 text-lg cursor-pointer">
        Book Ticket
      </button>
    </form>
  );
}
