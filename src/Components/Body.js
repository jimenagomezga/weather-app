import React, { useState, useEffect } from "react";
import "../Styles/Body.css";
import Loader from "../Components/Loader.js";
import CardsCitys from "../Components/CardsCitys";

function Body() {
  const [dataCityID, setDataCityID] = useState([]);

  const apiKey = "7e1ab248c358468814c67e6a2edd3cb4";
  const cities = [3451190, 3435910, 1857910, 745042, 3067696];

  async function getCityWeather(cityID) {
    if (!cityID) {
      throw new Error("cityID is required");
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}&units=metric&lang=sp`
    );
    const cityWeather = await response.json();
    return cityWeather;
  }

  const handleInformationCity = async () => {
    try {
      const citiesData = await Promise.all(
        cities.map((id) => getCityWeather(id))
      );
      setDataCityID(citiesData);
      console.log(citiesData);
    } catch (error) {
      console.error(`There was an error: ${error}`);
    }
  };

  useEffect(() => {
    handleInformationCity();
  }, []);

  return (
    <div className="bodyContainer">
      <div className="title">
        <h1> Te mostramos el clima disponible en estas ciudades</h1>
      </div>
      <div className="cardContainer">
        {!dataCityID ? (
          <Loader />
        ) : (
          dataCityID.map((datacity) => {
            return (
              <CardsCitys
                key={datacity.id}
                country={datacity.sys.country}
                name={datacity.name}
                icon={datacity.weather[0].icon}
                temp={datacity.main.temp}
                description={datacity.weather[0].description}
                timezone={datacity.timezone}
              />
            );
          })
        )}

        {/* <div className="card">
          <div className="transparency"></div>
          <img src={Riodejaneiro} alt="Riodejaneiro" />
          <div className="textCard">
            <h2>Rio de janeiro </h2>
            <img src={weatherIcon} alt="weatherIcon" />
            <h1>27°</h1>
          </div>
        </div> */}

        {/* <div className="card">
          <div className="transparency"></div>
          <img src={Buenosaires} alt="Buenosaires" />
          <div className="textCard">
            <h2>Buenos Aires</h2>
            <img src={weatherIcon} alt="weatherIcon" />
            <h1>18°</h1>
          </div>
        </div> */}

        {/* <div className="card">
          <div className="transparency"></div>
          <img src={Kyoto} alt="Kyoto" />
          <div className="textCard">
            <h2>Kyoto</h2>
            <img src={weatherIcon} alt="weatherIcon" />
            <h1>20°</h1>
          </div>
        </div> */}

        {/* <div className="card">
          <div className="transparency"></div>
          <img src={Estambul} alt="Estambul" />
          <div className="textCard">
            <h2>Estambul </h2>
            <img src={weatherIcon} alt="weatherIcon" />
            <h1>15°</h1>
          </div>
        </div> */}

        {/* <div className="card">
          <div className="transparency"></div>
          <img src={Praga} alt="Praga" />
          <div className="textCard">
            <h2>Praga </h2>
            <img src={weatherIcon} alt="weatherIcon" />
            <h1>21°</h1>
          </div>
        </div> */}
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
