import proj4 from "proj4";
import type { FeatureCollection, Geometry } from "geojson";

proj4.defs("EPSG:32647", "+proj=utm +zone=47 +datum=WGS84 +units=m +no_defs");

export const convertUTMtoLonLat = (utmCoord: number[]): [number, number] => {
  const [lon, lat] = proj4("EPSG:32647", "EPSG:4326", utmCoord);
  return [lon, lat];
};

export const convertGeometry = (geometry: Geometry): Geometry => {
  if (!geometry || !("type" in geometry)) return geometry;

  const { type } = geometry;

  if (type === "Point") {
    const coords = (geometry as any).coordinates as number[];
    if (!Array.isArray(coords) || coords.length < 2) return geometry;
    return { ...geometry, coordinates: convertUTMtoLonLat(coords) } as Geometry;
  }

  if (type === "Polygon") {
    const coords = (geometry as any).coordinates as number[][][];
    return {
      ...geometry,
      coordinates: coords
        .map((ring) =>
          ring
            .filter((c) => Array.isArray(c) && c.length >= 2)
            .map((c) => convertUTMtoLonLat(c))
        )
        .filter((ring) => ring.length > 0),
    } as Geometry;
  }

  if (type === "MultiPolygon") {
    const coords = (geometry as any).coordinates as number[][][][];
    return {
      ...geometry,
      coordinates: coords
        .map((poly) =>
          poly
            .map((ring) =>
              ring
                .filter((c) => Array.isArray(c) && c.length >= 2)
                .map((c) => convertUTMtoLonLat(c))
            )
            .filter((ring) => ring.length > 0)
        )
        .filter((poly) => poly.length > 0),
    } as Geometry;
  }

  return geometry;
};

export const convertGeoJsonData = (
  data: FeatureCollection | null
): FeatureCollection | null => {
  if (!data) {
    return null;
  }

  try {
    const convertedFC: FeatureCollection = {
      ...data,
      features: data.features
        .filter(
          (f) =>
            f &&
            f.geometry &&
            f.geometry.type &&
            (f.geometry as any).coordinates
        )
        .map((f) => ({
          ...f,
          geometry: convertGeometry(f.geometry),
        })),
    };
    return convertedFC;
  } catch (err) {
    console.error("GeoJson conversion error:", err);
    return null;
  }
};
