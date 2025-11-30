"use client";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Booking {
  name: string;
  email: string;
}

export default function AdminTable() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [availableSeats, setAvailableSeats] = useState(0);
  const [status, setStatus] = useState("");

  const fetchBookings = async () => {
    const res = await fetch("/api/bookings");
    const data = await res.json();

    setBookings(data.bookings);
    setAvailableSeats(data.availableSeats);
    setStatus(data.status);

    if (data.status === "full") {
      toast.warn("ที่นั่งเต็มแล้ว (Seats are full)");
    } else {
      toast.success(`มีที่นั่งว่าง ${data.availableSeats} ที่`);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="max-w-7xl w-full p-6 bg-white rounded shadow">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="flex items-center justify-between mb-4">
        <p className="mb-2 text-gray-400">
          Available Seats: {availableSeats} | Status: {status}
        </p>

        <button
          onClick={fetchBookings}
          className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Refresh
        </button>
      </div>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-gray-600">Name</th>
            <th className="border p-2 text-gray-600">Email</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.email}>
              <td className="border p-2 text-gray-800">{b.name}</td>
              <td className="border p-2 text-gray-800">{b.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
