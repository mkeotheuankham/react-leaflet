import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import BaseMap from "./Layer/BaseMap";

const MapContent = () => {
  // javascript

  return (
    <div>
      <MapContainer
        style={{ width: "100%", height: "100vh" }}
        center={[17.985375, 103.968534]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <BaseMap />
      </MapContainer>
    </div>
  );
};

export default MapContent;
