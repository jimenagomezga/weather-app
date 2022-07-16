import React, { useState, useEffect } from "react";
import CardsInfoDetailsCity from "../CardsInfoDetailsCity";
import Loader from "../Loader";
import { apiKey } from "../../Utils/constKey";

export default function InfoDetailsCity() {
  const [dataCity, setDataCity] = useState([]);
  const [loading, setLoading] = useState(true);

  const lat = -22.9028;
  const lon = -43.2075;

  const handleInformationCityDetail = async () => {
    try {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${apiKey}&units=metric&lang=sp`
      );
      const data = await res.json();
      setDataCity(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleInformationCityDetail();
  }, []);

  // const citylatlon = [
  //   { lat: -22.9028, lon: -43.2075 },
  //   { lat: -58.3772, lon: -34.6132 },
  //   { lat: 35.0211, lon: 135.7538 },
  //   { lat: 41.0351, lon: 28.9833 },
  //   { lat: 50.088, lon: 14.4208 },
  // ];

  // const handleInformationCityDetail = async () => {
  //   try {
  //     const citiesDataDetail = await Promise.all(
  //       citylatlon.map((longylatx) => {
  //         return (
  //           <>
  //             la={longylatx.lat}
  //             lo={longylatx.lon}
  //           </>
  //         );
  //       }),
  //       getCityWeatherDetailsCity

  //       // citylatlon.map((lat, lon) => getCityWeatherDetailsCity(lat, lon))
  //     );
  //     setDataCityDetail(citiesDataDetail);
  //     //console.log(citiesDataDetail);
  //   } catch (err) {
  //     console.log("There was an error");
  //   }
  // };

  const forHourly = dataCity.hourly?.map((dataHourly, index) => {
    let da = new Date(dataHourly.dt * 1000);
    let hor = da.getHours();

    return (
      <div className="dataHourly">
        <li key={index}>
          <div className="time">{hor}:00</div>
          <div className="containerTempH">
            {parseInt(dataHourly.temp)}&deg;
            <br />
            <br />
            {dataHourly.humidity}%
            <img
              src={`http://openweathermap.org/img/wn/${dataHourly.weather[0].icon}@2x.png`}
              alt="weatherIcon"
            />
            <h6>{dataHourly.weather[0].main}</h6>
            <br />
            {parseInt(dataHourly.wind_gust)}
            <br />
            <h6>Km/h</h6>
            <br />
            <h6>Nubes</h6>
            {dataHourly.clouds}%
          </div>
        </li>
      </div>
    );
  });

  const forDaily = dataCity.daily?.map((dataDaily, index) => {
    return (
      <div className="dataDaily">
        <li key={index}>
          <div className="time">{dataDaily.dt}</div>
          <div className="containerTempH">
            {parseInt(dataDaily.temp.day)}&deg;
            <br />
            temp min {parseInt(dataDaily.temp.min)}&deg;
            <br />
            temp max {parseInt(dataDaily.temp.max)}&deg;
            <br />
            temp night {parseInt(dataDaily.temp.night)}&deg;
            <br />
            temp eve {parseInt(dataDaily.temp.eve)}&deg;
            <br />
            temp morn {parseInt(dataDaily.temp.morn)}&deg;
            <br />
            humedad {dataDaily.humidity}%;
            <img
              src={`http://openweathermap.org/img/wn/${dataDaily.weather[0].icon}@2x.png`}
              alt="weatherIcon"
            />
            <br />
            {parseInt(dataDaily.wind_gust)}
            <br />
            <h6>Km/h</h6>
            <br />
            <h6>Nubes</h6>
            {dataDaily.clouds}
            <br />
            {dataDaily.weather[0].main}
          </div>
        </li>
      </div>
    );
  });

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <CardsInfoDetailsCity forHourly={forHourly} forDaily={forDaily} />
      )}
    </div>
  );
}
