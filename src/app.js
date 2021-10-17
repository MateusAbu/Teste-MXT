import React, { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import './styles.css';

const api = `https://api.themoviedb.org/3/`;
const img_api = 'http://image.tmdb.org/t/p/w500';

export default function App() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');

  useEffect(() => {
    if (text) {
      setInfo({});

      fetch(
        `${api}search/multi?api_key=f01db0d889e50f7a901036cb303e2d8e&language=pt&query=${text}`
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
      <table className="titleBar">
        <tbody>
          <tr>
            <td>
              <img
                alt="app icon"
                width="50"
                src="mdb.svg"
              />
            </td>
            <td width="8" />
            <td>
              <h1 className="text-gradient">Searcher</h1>
            </td>
          </tr>
        </tbody>
      </table>

      <SearchInput
        value={text}
        onChange={(search) => setText(search)}
      />

      {text && !info.results && <span>Carregando...</span>}
      {info.results && (
        <ul className="container">
          {info.results.map((movie) => (
            <li className="movie" key={movie.id}>
              <div className="movie-image">
                <img
                  src={img_api + movie.poster_path}
                  alt={movie.original_title}
                />
              </div>
              <div className="movie-info">
                <div className="title">{movie.title}</div>
                <div className="title">{movie.name}</div>
                <div className="genres">
                  {' '}
                  Nota: {movie.vote_average}/10
                </div>
                <div className="movie-text">
                  <div>SUMMARY</div>
                  <div className="date">
                    {movie.release_date}
                  </div>
                  <div>{movie.first_air_date}</div>
                </div>
                <div class="summary">
                  <div class="text">{movie.overview}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
