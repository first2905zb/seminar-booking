import CancelForm from '../../components/CancelForm';

export default function CancelPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6 mt-10">Cancel Ticket</h1>
      <CancelForm />
    </div>
  );
}
