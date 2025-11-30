import LayoutWithNavbar from '../layout-with-navbar';
import CancelForm from '../../components/CancelForm';

export default function CancelPage() {
  return (
    <LayoutWithNavbar title="Cancel Ticket">
      <div className="flex items-center justify-center p-4">
        <CancelForm />
      </div>
    </LayoutWithNavbar>
  );
}
