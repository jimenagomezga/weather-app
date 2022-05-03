import React from "react";
import "../Styles/CardsCitys.css";
// import { imgData } from "../Means/data";
//import Card from "../Components/Card";
import moment from "moment";
import "moment/locale/es";
import image1 from "../Assets/Rio-de-janeiro.jpg";
// import image2 from "../Assets/Buenos-aires.jpeg";
// import image3 from "../Assets/Kyoto.jpg";
// import image4 from "../Assets/Estambul.jpg";
// import image5 from "../Assets/Praga-republica-checa.jpg";

const imgData = [
  { id: 3451190, image: image1 },
  // { id: 3435910, image: image2 },
  // { id: 1857910, image: image3 },
  // { id: 745042, image: image4 },
  // { id: 3067696, image: image5 },
];

export default function CardsCitys({
  name,
  icon,
  temp,
  description,
  hora,
  timezone,
}) {
  const dateTime = moment.unix(hora).utc().add(timezone, "s");

  return (
    <div className="card ">
      <div className="transparency"></div>
      {imgData.map((imgCity, index) => {
        return <img key={index} src={imgCity.image} alt="ImagenCiudad" />;
      })}
      <div className="textCard animate__animated animate__fadeIn">
        <h4>{dateTime.format("LL")}</h4>
        <h4>{dateTime.format("h:mm:ss a")}</h4>

        <div className="containterNameDescription">
          <h2>{name}</h2>
          <h4>{description}</h4>
        </div>
        {/* Container clima */}
        <div className="containerWeather">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weatherIcon"
          />
          <h1>
            {Math.round(temp)}
            <sup>&deg;C</sup>
          </h1>
        </div>
      </div>
    </div>
  );
}
