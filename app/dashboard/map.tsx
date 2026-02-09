"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer
      center={[39.3292, -82.1013]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[39.3292, -82.1013]}>
        <Popup>Athens RP Patrol Area</Popup>
      </Marker>
    </MapContainer>
  );
}
