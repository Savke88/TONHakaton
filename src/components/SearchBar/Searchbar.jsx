import { useState } from "react";
import "./Searchbar.css";
import { redirect } from "react-router-dom";

const NOMINATIM_URL = "https://nominatim.openstreetmap.org/search?";
const params = { q: "", forma: "json", addressdetails: "addressdetails" };

export function Searchbar() {
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleButtonClick = () => {
    const params = {
      q: searchText,
      format: "json",
      addressdetails: 1,
      polygon_geojson: 0,
    };

    const quaryString = new URLSearchParams(params).toString();
    const requestOprions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${NOMINATIM_URL}${quaryString}`, requestOprions).then((respose) =>
      respose
        .text()
        .then((result) => {
          console.log(JSON.parse(result));
          setListPlace(JSON.parse(result));
        })
        .catch((err) => {
          console.log("error: ", err);
        })
    );
  };

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter destination"
          // value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className="button-container">
        <button className="search-button" onClick={handleButtonClick}>
          Search
        </button>
      </div>

      <div>
        <ul>
          {listPlace.map((item) => {
            return <li key={item.osm_id}>{item.display_name}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
