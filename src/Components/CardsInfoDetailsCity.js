import React from "react";
import "../../src/Styles/CardsInfoDetailsCity.css";

export default function CardsInfoDetailsCity({ forhourly }) {
  return (
    <div className="infoDetails">
      <div>
        <h5>Tiempo actual en</h5>
        <div className="containerWeatherCurrent">
          <h3>Aca la ciudad</h3>
          <img src="aca va el icono" alt="weatherIcon" />
          <h1>
            00 <sup>°</sup>
          </h1>
          <p>Description</p>
        </div>
      </div>

      <div className="containerCardForHours">
        <h3>Pronóstico detallado hora por hora</h3>
        <div className="cardForHours">{forhourly}</div>
      </div>

      <div className="containerCardFortyEightHours">
        <h3>Pronóstico detallado por hora — Próximas 48 horas</h3>
        <div className="cardFortyEightHours"></div>
      </div>

      <div className="containerCardForDays">
        <h3>Pronóstico detallado por días</h3>
        <div className="cardForDays"></div>
      </div>

      <div className="containerLastWeek">
        <h3>Pronóstico detallado semana anterior</h3>
        <div className="cardLastWeek"></div>
      </div>
    </div>
  );
}
