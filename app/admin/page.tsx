import LayoutWithNavbar from "../layout-with-navbar";
import AdminTable from "../../components/AdminTable";

export default function AdminPage() {
  return (
    <LayoutWithNavbar title="Admin Panel">
      <div className="flex items-center justify-center p-4">
        <AdminTable />
      </div>
    </LayoutWithNavbar>
  );
}
