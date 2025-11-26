"use client";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

export default function MapView() {
  const [geoData, setGeoData] = useState<any>(null);

  useEffect(() => {
    fetch("/data/forest.json")
      .then((res) => res.json())
      .then((data) => setGeoData(data));
  }, []);

  if (!geoData) return <p>Loading map...</p>;

  return (
    <div className="max-w-4xl w-full p-6 bg-white rounded shadow">
      <MapContainer
        center={[13.7563, 100.5018] as [number, number]}
        zoom={6}
        style={{ height: "500px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON data={geoData} />
      </MapContainer>
    </div>
  );
}
