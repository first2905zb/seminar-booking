"use client";
import MapView from "../../components/MapView";

export default function MapPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">GIS Map</h1>
      <MapView />
    </div>
  );
}
