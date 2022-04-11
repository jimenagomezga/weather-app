import React from "react";
import "../Styles/Body.css";
import Riodejaneiro from "../Assets/42fb6908-dcd5-4edb-9f8c-76208494af80.webp";
import Buenosaires from "../Assets/istockphoto-667138246-170667a.jpeg";
import Kyoto from "../Assets/sorasak-_UIN-pFfJ7c-unsplash.jpeg";
import Estambul from "../Assets/estambul.jpeg";
import Praga from "../Assets/praga-republica-checa.webp";

function Body() {
  return (
    <div className="bodyContainer">
      <div className="title">
        <h1> Te mostramos el clima disponible en estas ciudades</h1>
      </div>
      <div className="cardContainer">
        <div className="card">
          <img src={Riodejaneiro} alt="Riodejaneiro" />
          <h2>Rio de janeiro </h2>
        </div>
        <div className="card">
          <img src={Buenosaires} alt="Buenosaires" />
          <h2>Buenos Aires</h2>
        </div>
        <div className="card">
          <img src={Kyoto} alt="Kyoto" />
          <h2>Kyoto</h2>
        </div>
        <div className="card">
          <img src={Estambul} alt="Estambul" />
          <h2>Estambul </h2>
        </div>
        <div className="card">
          <img src={Praga} alt="Praga" />
          <h2>Praga </h2>
        </div>
      </div>
      <div className="subscriptionContainer">
        <h1 className="subscription">
          Suscríbete a nuesto boletín de noticias y actualizaciones climáticas
        </h1>
        <input type="text" placeholder="Ingresa tu correo" />
        <button>Más información</button>
      </div>
    </div>
  );
}

export default Body;
