import React, { useState } from "react";
import { SemanticClassificationFormat } from "typescript";

import "./styles.css";

const SearchResults = (props) => {
  const api = `https://api.themoviedb.org/3/`;
  const img_api = "http://image.tmdb.org/t/p/w500";

  const handleClick = (movie) => {
    let info = {};
    

    switch (movie.media_type) {
      case "tv":
        // call tv api
        info = `${api}tv/${movie.id}?language=pt&api_key=f01db0d889e50f7a901036cb303e2d8e`;
        fetch (info)
        .then((response) => response.json())
        .then((response) => {
          console.log(response); 
        })
        break;
      case "movie":
        //call movie api
        info = `${api}movie/${movie.id}?language=pt&api_key=f01db0d889e50f7a901036cb303e2d8e`;
        fetch (info)
        .then((response) => response.json())
        .then((response) => {
          console.log(response); 
        })
        break;
      case "person":
        //call person api
        info = `${api}person/${movie.id}?language=pt&api_key=f01db0d889e50f7a901036cb303e2d8e`;
        fetch (info)
        .then((response) => response.json())
        .then((response) => {
          console.log(response); 
        })
        break;
      default:
        info = null;
        break;
    }
    return info;
  };

  return (
    <div>
    <ul className="container">
      {props.results &&
        props.results.map((movie) => (
          <li
            className="movie"
            key={movie.id}
            onClick={() => handleClick(movie)}
          >            
            <div className="movie-image">
              <img
                src={
                  movie.poster_path
                    ? img_api + movie.poster_path 
                    : img_api + movie.profile_path
                } onError={(e)=>{e.target.onerror = null; e.target.src="download.png"}}
              />
            </div>
            <div className="vertical-fade"> </div>
            <div className="movie-info">
            <div className="title">{movie.title?
                                    movie.title:
                                    movie.name}</div>
              <div className="genres">{movie.vote_average?
                                      <div>Nota: {movie.vote_average}</div>:
                                      <div>Popularidade: {movie.popularity}</div>}</div> 
                                      
              <div className="movie-text">
                <div>RESUMO</div>
                <div className="date">
                  {movie.release_date
                    ? movie.release_date
                    : movie.first_air_date}
                </div>
              </div>
              <div className="summary">
                <div className="text">{movie.overview?
                                      movie.overview:
                                      movie.known_for_department}</div>
              </div>
            </div>
          </li>
        ))}
    </ul>
    <div className="vertical-fade1"></div>
    </div>

  );
};

export default SearchResults;