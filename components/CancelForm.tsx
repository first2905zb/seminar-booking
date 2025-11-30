"use client";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function CancelForm() {
  const [email, setEmail] = useState("");

  const handleCancel = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/bookings?email=${email}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (res.ok) {
      toast.success(data.message);
      setEmail("");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <form
      onSubmit={handleCancel}
      className="flex flex-col max-w-md w-full gap-4 bg-white p-6 rounded shadow"
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400 placeholder-gray-400 text-gray-800"
      />
      <button className="bg-red-500 text-white py-2 rounded hover:bg-red-600 cursor-pointer">
        Cancel Booking
      </button>
    </form>
  );
}
