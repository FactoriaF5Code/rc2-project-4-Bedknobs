import moviesData from "./data.json";

export class MovieService {
  getMoviesByGenre() {
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

    const moviesByGenre = Object.fromEntries(
      Object.keys(genreNames).map((genreId) => [
        genreId,
        moviesData.results
          .filter((movie) => movie.genre_ids.includes(parseInt(genreId)))
          .map((movie) => ({
            title: movie.title,
            posterPath: `${baseURL}${movie.poster_path}`,
          })),
      ])
    );

    return { genreNames, moviesByGenre };
  }
}
