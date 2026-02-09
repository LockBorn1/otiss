"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngTuple } from "leaflet";

export default function Map() {
  const center: LatLngTuple = [39.3292, -82.1013];

  return (
    <MapContainer center={center} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={center}>
        <Popup>Athens RP Patrol Area</Popup>
      </Marker>
    </MapContainer>
  );
}
