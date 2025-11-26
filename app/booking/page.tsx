import BookingForm from '../../components/BookingForm';

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6 mt-10">Book Ticket</h1>
      <BookingForm />
    </div>
  );
}
