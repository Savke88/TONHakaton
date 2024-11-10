import wallet from "../Firs/wallet.png";
import zuttaxi from "../Firs/zuttaxi.png";
import withdraw from "../Firs/withdraw.png";
import deposit from "../Firs/deposit.png";
import coin from "../Firs/coin.png";
import "./Third.css";
// import Map from "@/components/Map/Map";
import { Map } from "../Map/Map";
import { useState } from "react";
import { Searchbar } from "../SearchBar/Searchbar";

export function Third() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleButtonClick = () => {
    alert(`Searching for: ${searchQuery}`);
  };
  return (
    <div className="app-container">
      <Map
        style={{
          height: "60vh",
          width: "100vw",
        }}
      />

      <Searchbar />
    </div>
  );
}
