import { useState } from "react";
import React from "react";
import "./search.css";
const WeatherSearch = ({ setCity }) => {
  const [inputvalue, setInputvalue] = useState("");
  console.log(inputvalue);
  const handleinputchange = (e) => {
    setInputvalue(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    setCity(inputvalue);
    console.log(setCity);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchClick(e);
    }
  };
  return ( 
    <div className="search-container">
      <input
        type="text"
        placeholder="Search here"
        value={inputvalue}
        onKeyDown={handleKeyPress}
        onChange={handleinputchange}
      />
      <button
        onClick={(e) => {
          handleSearchClick(e);
        }}
      >
        Search
      </button>
    </div>
  );
};
export default WeatherSearch;
