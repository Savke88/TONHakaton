import { Section, Cell, Image, List } from "@telegram-apps/telegram-ui";

import "./Searchbar.css";
import Search from "@/../assets/SearchBar/Search.png";

export function Searchbar() {
  return (
    <>
      <div className="Search">
        <img src={Search} />
        <input type="text" placeholder="Search Album" />
      </div>
    </>
  );
}
