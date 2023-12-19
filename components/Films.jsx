import movies from "../src/data/data.json";
import './Films.css'

export function Movies() {
    const baseURL = "http://image.tmdb.org/t/p/original";
  return (
    <ul>
      {movies.results.map((movie) => {
        const fullPath = `${baseURL}${movie.poster_path}`
        return <li key={movie.id}>
            <img src={fullPath} alt={movie.title} /></li>
      })}
    </ul>
  );
}
