import Header from "@/components/Header";
import Link from "next/link";
import BookingPage from "./booking/page";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <BookingPage />
    </div>
  );
}
