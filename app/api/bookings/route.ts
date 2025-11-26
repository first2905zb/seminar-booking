import { NextRequest, NextResponse } from "next/server";

// จำนวนที่นั่งสูงสุด
const CAPACITY = 10;

// เราจะเก็บข้อมูลแบบ memory (ตัวอย่าง)
// สำหรับ production ต้องใช้ database จริง
let bookings: { name: string; email: string }[] = [];

export async function GET(req: NextRequest) {
  const availableSeats = CAPACITY - bookings.length;
  const status = availableSeats > 0 ? "available" : "full";

  return NextResponse.json({ bookings, availableSeats, status });
}

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();

  // validation
  if (!name || !email) {
    return NextResponse.json(
      { message: "Name and email required" },
      { status: 400 }
    );
  }

  if (bookings.find((b) => b.email === email || b.name === name)) {
    return NextResponse.json(
      { message: "Name or email already booked" },
      { status: 400 }
    );
  }

  if (bookings.length >= CAPACITY) {
    return NextResponse.json({ message: "Seats are full" }, { status: 400 });
  }

  bookings.push({ name, email });

  return NextResponse.json({ message: `${name} booked successfully` });
}

export async function DELETE(req: NextRequest) {
  const url = new URL(req.url);
  const email = url.searchParams.get("email");

  if (!email) {
    return NextResponse.json({ message: "Email required" }, { status: 400 });
  }

  const index = bookings.findIndex((b) => b.email === email);
  if (index === -1) {
    return NextResponse.json({ message: "Booking not found" }, { status: 404 });
  }

  const removed = bookings.splice(index, 1)[0];

  return NextResponse.json({
    message: `${removed.name} cancelled, seats available again`,
  });
}
