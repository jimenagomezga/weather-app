import React from "react";
import "../Styles/CardsCitys.css";
import moment from "moment";
import "moment/locale/es";
//import image1 from "../Assets/Rio-de-janeiro.jpg";
import { Link } from "react-router-dom";

// const imgData = [
//   { id: 3451190, image: image1 },
//   // { id: 3435910, image: image2 },
//   // { id: 1857910, image: image3 },
//   // { id: 745042, image: image4 },
//   // { id: 3067696, image: image5 },
// ];

export default function CardsCitys({
  id,
  name,
  icon,
  temp,
  description,
  hora,
  timezone,
}) {
  const dateTime = moment.unix(hora).utc().add(timezone, "s");

  const imageCity = require.context("../Assets/Cities", true);

  return (
    <div className="card ">
      <div className="transparency"></div>
      <img src={imageCity(`./${id}.jpg`)} alt={name} />
      <div className="textCard animate__animated animate__fadeIn">
        <h4>{dateTime.format("LL")}</h4>
        <h4>{dateTime.format("h:mm:ss a")}</h4>

        <div className="containterNameDescription">
          <Link to="/weathercity">
            <h2>{name}</h2>
          </Link>

          <h4>{description}</h4>
        </div>
        {/* Container clima */}
        <div className="containerWeather">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weatherIcon"
          />
          <h1 className="tempCard">{Math.round(temp)}&deg;</h1>
        </div>
      </div>
    </div>
  );
}
