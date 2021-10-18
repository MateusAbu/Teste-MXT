import React, { useState } from "react";

import "./styles.css";

const SearchInput = ({ onChange }) => {
  const [displayValue, setDisplayValue] = useState('');

  const handleChange = (event) => {
    setDisplayValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="search_box">
      <form>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="search"
          pattern=".*\S.*"
          required
          value={displayValue}
          onChange={handleChange}
        />
        <span className="caret"></span>
      </form>
    </div>
  );
};

export default SearchInput;
