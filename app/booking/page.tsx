import LayoutWithNavbar from "../layout-with-navbar";
import BookingForm from "../../components/BookingForm";

export default function BookingPage() {
  return (
    <LayoutWithNavbar title="Booking">
      <div className="flex items-center justify-center p-4">
        <BookingForm />
      </div>
    </LayoutWithNavbar>
  );
}
