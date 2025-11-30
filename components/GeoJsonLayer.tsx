"use client";
import React, { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import type { FeatureCollection } from "geojson";
import { convertGeoJsonData } from "@/lib/geoJsonConverter";

export interface GeoJsonLayerProps {
  data: FeatureCollection | null;
}

const GeoJsonLayer: React.FC<GeoJsonLayerProps> = ({ data }) => {
  const map = useMap();
  const [converted, setConverted] = useState<FeatureCollection | null>(null);

  useEffect(() => {
    if (!data) {
      setConverted(null);
      return;
    }

    const result = convertGeoJsonData(data);
    setConverted(result);
  }, [data]);

  useEffect(() => {
    if (!converted || !map) return;

    const layer = L.geoJSON(converted as any, {
      onEachFeature: (feature, lyr) => {
        const props = (feature as any).properties || {};
        const html = `
          <div style="font-size:12px">
            <strong>${props.name_place || "ไม่มีชื่อ"}</strong><br/>
            ประเภท: ${props.type2 || "-"}<br/>
            จังหวัด: ${props.prov || "-"}
          </div>
        `;
        lyr.bindPopup(html);
      },
      style: {
        color: "#8b2222ff",
        weight: 2,
        opacity: 0.8,
        fillOpacity: 0.4,
      },
    }).addTo(map);

    return () => {
      map.removeLayer(layer);
    };
  }, [converted, map]);

  return null;
};

export default GeoJsonLayer;
