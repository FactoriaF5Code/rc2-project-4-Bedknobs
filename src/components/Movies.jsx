import { useState } from "react";
import { Movie } from "./Movie";
import { MovieService } from "../data/MovieService";
import "./Movies.css";

export function Movies() {
  const movieService = new MovieService();
  const { genreNames, moviesByGenre } = movieService.getMoviesByGenre();
  const [currentIndexByGenre, setCurrentIndexByGenre] = useState(
    Object.fromEntries(
      Object.keys(moviesByGenre).map((genreId) => [genreId, 0])
    )
  );
  const goToSlide = (genreId, direction) => {
    setCurrentIndexByGenre((prevIndex) => ({
      ...prevIndex,
      [genreId]:
        (prevIndex[genreId] + direction + moviesByGenre[genreId].length) %
        moviesByGenre[genreId].length,
    }));
  };

  return (
    <div className="moviesContainer">
      {Object.entries(moviesByGenre).map(([genreId, genreMovies]) => (
        <div key={genreId}>
          <h2 className="genreName">Top cine de {genreNames[genreId]}</h2>
          <div className="moviesSlider">
            <ul>
              <div className="leftArrow" onClick={() => goToSlide(genreId, -1)}>
                &#10092;
              </div>
              <div className="rightArrow" onClick={() => goToSlide(genreId, 1)}>
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
                {genreMovies.map((movie) => (
                  <Movie {...movie} key={movie.title} />
                ))}
              </div>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
