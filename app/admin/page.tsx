import AdminTable from "../../components/AdminTable";

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6 mt-10">Admin Panel</h1>
      <AdminTable />
    </div>
  );
}
