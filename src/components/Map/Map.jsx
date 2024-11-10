import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import markerIcon from "./marker.png";

/*
 *@props style | stil mape
 *@props markers | example:  [{ geocode: [44.7, 20.4], popUp: "Taksista 1" },{ geocode: [44.82, 20.43], popUp: "Taksista 2" }]
 *@props iconUrl | link do ocokice
 *@props Center @default :44.799906, 20.447202 | Centar pocetne lokacije
 *@props iconSize @default 38 | velicina pina na mapi
 *@props zoom @default 14 | Zumiranje mape
 */
export function Map({
  style = { height: "100vh", width: "100%" },
  markers = [],
  iconUrl = markerIcon,
  center = [44.799906, 20.447202],
  iconSize = 38,
  zoom = 14,
}) {
  const customIcon = new Icon({
    iconUrl: iconUrl,
    iconSize: [0.73 * iconSize, 1 * iconSize],
    //iconUrl : require("@/../assets/SearchBar/Search.png"),
  });

  return (
    <MapContainer center={center} zoom={zoom} style={style}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.geocode} icon={customIcon}>
          <Popup> {marker.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
