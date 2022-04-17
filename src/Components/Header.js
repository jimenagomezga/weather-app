import React from "react";
import "../Styles/Header.css";
import logoWeatherApp from "../../src/Assets/logo.png";
import imageHeader from "../../src/Assets/Windy day-pana.png";

export default function Header() {
  return (
    <div className="headerContainer">
      <nav>
        <img src={logoWeatherApp} alt="logoWeatherApp" />
        <div className="menu">
          <h4>Términos de servicio</h4>
          <h4>Servicios</h4>
          <h4>Noticas</h4>
          <h4>Contactenos</h4>
        </div>
        <div className="titleContainer">
          <div>
            <h1>
              ¡Cuando el <br />
              clima realmente importa!
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              efficitur fringilla lorem, nec fermentum est consequat ut. Aliquam
              at posuere enim, vel pharetra nisi. Nunc tempor purus et congue
              elementum. Praesent rhoncus ante non nunc sagittis vulputate. Nam
              in nisi at nibh laoreet varius.{" "}
            </p>
            <button>Más información</button>
          </div>
          <div className="imageHeader">
            <img src={imageHeader} alt="imageHeader" />
          </div>
        </div>
      </nav>
    </div>
  );
}
