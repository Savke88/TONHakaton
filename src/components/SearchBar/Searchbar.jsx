import "./Searchbar.css";

export function Searchbar() {
  return (
    <>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter destination"
          // value={searchQuery}
          // onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className="button-container">
        <button className="search-button">
          {" "}
          {/*onClick={handleButtonClick} */}
          Search
        </button>
      </div>
    </>
  );
}
