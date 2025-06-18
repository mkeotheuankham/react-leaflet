import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import BaseMap from "./Layer/BaseMap";
// import CSVFileLocal from "./Layer/CSVFileLocal";

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
        {/* <CSVFileLocal /> */}

        <BaseMap />
      </MapContainer>
    </div>
  );
};

export default MapContent;
