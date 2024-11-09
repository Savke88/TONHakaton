import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

/*
 *@props style | stil mape
 *@props markers | example:  [{ geocode: [44.7, 20.4], popUp: "Taksista 1" },{ geocode: [44.82, 20.43], popUp: "Taksista 2" }]
 *@props iconUrl | link do ocokice
 */
export function Map({ style, markers, iconUrl }) {
  const customIcon = new Icon({
    iconUrl: iconUrl,
    iconSize: [38, 38],
    //iconUrl : require("@/../assets/SearchBar/Search.png"),
  });

  return (
    <MapContainer center={[44.799906, 20.447202]} zoom={14} style={style}>
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
