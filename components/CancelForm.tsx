'use client';
import { useState } from 'react';

export default function CancelForm() {
  const [email, setEmail] = useState('');

  const handleCancel = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/bookings?email=${email}`, { method: 'DELETE' });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleCancel} className="flex flex-col max-w-md w-full gap-4 bg-white p-6 rounded shadow">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      <button className="bg-red-500 text-white py-2 rounded hover:bg-red-600 cursor-pointer">Cancel Booking</button>
    </form>
  );
}
