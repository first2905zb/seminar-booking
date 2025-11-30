"use client";
import dynamic from "next/dynamic";

const MapContainer = dynamic(() => import("./MapContainer"), {
  ssr: false,
  loading: () => <div>Loading map...</div>,
});

export default function MapView() {
  return <MapContainer />;
}
