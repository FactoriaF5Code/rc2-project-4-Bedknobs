import "./Movies.css";
import movies from "../src/data/data.json";
import { Movie } from "./Movie";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export function Movies() {
  const baseURL = "http://image.tmdb.org/t/p/original";
  const genreNames = {
    28: "Acción",
    12: "Aventura",
    16: "Animación",
    35: "Comedia",
    80: "Crimen",
    18: "Drama",
    10751: "Familia",
    14: "Fantasía",
    36: "Historia",
    27: "Horror",
    10402: "Música",
    9648: "Misterio",
    53: "Thriller",
    878: "Ciencia Ficción",
  };
  const moviesByGenre = {};

  movies.results.forEach((movie) => {
    movie.genre_ids.forEach((genreId) => {
      if (!moviesByGenre[genreId]) {
        moviesByGenre[genreId] = [];
      }
      moviesByGenre[genreId].push(movie);
    });
  });

  // Initialize state for each genre
  const initialIndexState = Object.fromEntries(
    Object.keys(moviesByGenre).map((genreId) => [genreId, 0])
  );

  const [currentIndexByGenre, setCurrentIndexByGenre] =
    useState(initialIndexState);

    const goToPrevSlide = (genreId) => {
      setCurrentIndexByGenre((prevIndex) => ({
        ...prevIndex,
        [genreId]: prevIndex[genreId] === 0 ? moviesByGenre[genreId].length - 1 : prevIndex[genreId] - 1
      }));
    };
    
    const goToNextSlide = (genreId) => {
      setCurrentIndexByGenre((prevIndex) => ({
        ...prevIndex,
        [genreId]: prevIndex[genreId] === moviesByGenre[genreId].length - 1 ? 0 : prevIndex[genreId] + 1
      }));
    };

  return (
    <div className="moviesContainer">
      {Object.entries(moviesByGenre).map(([genreId, genreMovies]) => (
        <div key={genreId}>
          <h2 className="genreName">Top cine de {genreNames[genreId]}</h2>
          <div className="moviesSlider">
            <ul>
              <div className="leftArrow" onClick={() => goToPrevSlide(genreId)}>
                &#10092;
              </div>
              <div
                className="rightArrow"
                onClick={() => goToNextSlide(genreId)}
              >
                &#10093;
              </div>
              <div
                className="movieStyle"
                style={{
                  transform: `translateX(-${
                    currentIndexByGenre[genreId] * 5
                  }%)`,
                }}
              >
                {genreMovies.map((movie) => {
                  const fullPath = `${baseURL}${movie.poster_path}`;
                  return (
                    <Movie
                      posterPath={fullPath}
                      title={movie.title}
                      key={movie.id}
                    />
                  );
                })}
              </div>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
