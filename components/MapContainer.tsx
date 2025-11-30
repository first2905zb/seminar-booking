"use client";
import {
  MapContainer,
  TileLayer,
  LayersControl,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import naturalsite from "@/public/data/bhuminiwes_naturalsite.json";
import GeoJsonLayer from "./GeoJsonLayer";

const MapViewClient = () => {
  return (
    <MapContainer
      center={[16.4563, 99.5018]}
      zoom={10}
      scrollWheelZoom={true}
      className="h-screen w-full"
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OSM Standard">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Carto Light">
          <TileLayer url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>

        <LayersControl.Overlay checked name="Natural Sites">
          <GeoJsonLayer data={naturalsite as any} />
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default MapViewClient;
