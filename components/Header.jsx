import "./Header.css";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <section className="leftHeader">
        <a href='../index.html'>
          <img src="../img/LogoFilmin.png" alt="Logo de Filmin" />
        </a>
        <p>Inicio</p>
        <p>Películas</p>
        <p>Series</p>
        <p>Colecciones</p>
        <p>Festivales</p>
        <p>Más</p>
      </section>
      <section className="rightHeader">
        <button className="suscribeButton">SUSCRÍBETE</button>
        <button className="sesionButton">INICIAR SESIÓN</button>
        <img src="../img/icons/search.png" alt="Icono de búsqueda" />
      </section>
    </header>
  );
};
