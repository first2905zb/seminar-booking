"use client";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

interface Booking {
  name: string;
  email: string;
}

export default function AdminTable() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [availableSeats, setAvailableSeats] = useState(0);
  const [status, setStatus] = useState("");
  const [capacity, setCapacity] = useState(10);
  const [newCapacity, setNewCapacity] = useState(10);

  const fetchBookings = async () => {
    const res = await fetch("/api/bookings");
    const data = await res.json();

    setBookings(data.bookings);
    setAvailableSeats(data.availableSeats);
    setStatus(data.status);
    setCapacity(data.capacity || 10); 
    setNewCapacity(data.capacity || 10);
  };

  const updateCapacity = async () => {
    if (newCapacity < bookings.length) {
      alert("New capacity cannot be less than current bookings!");
      return;
    }

    const res = await fetch("/api/bookings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ capacity: newCapacity }),
    });

    const data = await res.json();
    alert(data.message);
    fetchBookings();
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="max-w-7xl w-full p-6 bg-white rounded shadow">
      <div className="flex items-center justify-between mb-4">
        <p className="mb-2 text-gray-400">
          Available Seats: {availableSeats} | Status: {status} | Capacity:{" "}
          {capacity}
        </p>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 mb-4">
            <input
              type="number"
              value={newCapacity}
              onChange={(e) => setNewCapacity(Number(e.target.value))}
              className="border p-2 rounded w-13"
              min={bookings.length}
            />
            <button
              onClick={updateCapacity}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Update Capacity
            </button>
          </div>
          <button
            onClick={fetchBookings}
            className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Refresh
          </button>
        </div>
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
