import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import "./styles.css";

const api = `https://api.themoviedb.org/3/`
const teste = 'http://image.tmdb.org/t/p/w500'

export default function App() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState("");

  useEffect(() => {
    if (text) {
      setInfo({});

      fetch(
        `${api}search/multi?api_key=f01db0d889e50f7a901036cb303e2d8e&query=${text}`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setInfo(response);
        });
    }
  }, [text]);

  return (
    <div className="App">
      <h1> Busca </h1>
      <SearchInput value={text} onChange={(search) => setText(search)} />
      {text && !info.results && <span>Carregando...</span>}
      {info.results && (
        <ul className="movie-list">
          {info.results.map((movie) => (
            <li key={movie.id}>
              <img src={teste + movie.poster_path} alt={movie.original_title} />
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}