import React, { useEffect, useState } from "react";

import TopBar from "./components/TopBar";
import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";

import "./styles.css";

const api = `https://api.themoviedb.org/3/`;

export default function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (search) => {
    setSearch(search);
  }

  useEffect(() => {
    if (search === '') {
      setResults([]);
      return null;
    }
    fetch(
      `${api}search/multi?api_key=f01db0d889e50f7a901036cb303e2d8e&language=pt&query=${search}`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setResults(response.results);
      });
      
  }, [search]);

  return (
    <div className="App">
      <TopBar />
      <SearchInput onChange={handleSearch} />
      <SearchResults results={results} />
    </div>
  );
}
