import "./Header.css";
export const Header = () => {
  return (
    <header>
      <section className="leftHeader">
        <img src="../img/LogoFilmin.png" alt="Logo de Filmin" />
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
