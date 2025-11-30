import LayoutWithNavbar from "../layout-with-navbar";
import MapView from "@/components/MapView";

export default function MapPage() {
  return (
    <LayoutWithNavbar title="GIS">
      <div className="flex items-center justify-center p-4">
        <div
          className="w-full bg-white rounded-lg shadow-md overflow-hidden"
          style={{ height: "70vh", maxWidth: "95%" }}
        >
          <MapView />
        </div>
      </div>
    </LayoutWithNavbar>
  );
}
