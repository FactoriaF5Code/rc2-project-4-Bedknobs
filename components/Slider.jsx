import "./Slider.css";
import posters from "../src/data/data.json";
import { Poster } from "./Poster";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

export function Slider() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % 19);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (counter === 19) {
      setTimeout(() => setCounter(0), 700);
    }
  }, [counter]);

  const baseURL = "http://image.tmdb.org/t/p/original";

  return (
    <div className="sliderContainer">
      <div className="sliderText">
        <h4>Descubre el cine que lo cambia todo</h4>
        <p>
          Con nuestra suscripción, accede a obras maestras, clásicos, cine
          independiente, series exclusivas, documentales y mucho más.
        </p>
      </div>
      <div
        className="slider"
        style={{ transform: `translateX(${-counter * 100}%)` }}
      >
        {posters.results.map((poster) => {
          const fullPath = `${baseURL}${poster.backdrop_path}`;
          return (
            <Poster
              backdrop_path={fullPath}
              title={poster.title}
              key={poster.id}
            />
          );
        })}
      </div>
    </div>
  );
}
