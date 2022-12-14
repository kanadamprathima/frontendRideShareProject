import FindRide from "../components/FindRide";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  useMapEvent,
} from "react-leaflet";
import RoutePoints from "../components/RoutePoints";

import { useState } from "react";
const { BaseLayer } = LayersControl;

const OfferRidePage = () => {
  const [latitude, setLatitude] = useState(52.3681);
  const [longitude, setLongitude] = useState(4.903);
  // const [pickup, setPickup] = useState([52.3681, 4.903]);
  // const [dropOff, setDropOff] = useState([50.3681, 3.903]);
  const [rideInfo, setRideInfo] = useState({});

  return (
    <div className="container" style={{ width: "500", height: "600" }}>
      <div
        className="card"
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "5%",
          backgroundColor: "ghostwhite",
        }}
      >
        <h2 className="h2">publish ride</h2>
        <FindRide />
      </div>
      <br />
      {/* 1- The whole Map Component becomes another component, to be called inside the FindRide */}
      <MapContainer
        style={{ height: "700px" }}
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <LayersControl>
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
        </LayersControl>

        <RoutePoints />
        {/* {position === null ? null : (
            <Marker position={position}>
              <Popup>You are here!</Popup>
            </Marker>
          )} */}
        <Marker position={[latitude, longitude]}>
          <Popup>You are here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
// };

export default OfferRidePage;
