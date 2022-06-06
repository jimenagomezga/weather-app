import React, { useState, useEffect } from "react";
import CardsInfoDetailsCity from "../CardsInfoDetailsCity";
import Loader from "../Loader";
import moment from "moment";
import "moment/locale/es";
import { apiKey } from "../../Utils/constKey";

export default function InfoDetailsCity() {
  const [dataCityDetail, setDataCityDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [hourlyWeather, setHourlyWeather] = useState([]);

  const lat = -22.9028;
  const lon = -43.2075;

  const handleInformationCityDetail = async () => {
    try {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,ourly,daily&appid=${apiKey}&units=metric&lang=sp`
      );
      const data = await res.json();
      setDataCityDetail(data);
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

  const forhourly = dataCityDetail.hourly?.map((dataHourly, index) => {
    return (
      <div className="dataHourly">
        <li key={index}>
          <div className="time">{dataHourly.dt}</div>
          <div className="containerTempH">
            {parseInt(dataHourly.temp)}&deg;
            <br />
            <br />
            {dataHourly.humidity}%
            <img
              src={`http://openweathermap.org/img/wn/${dataHourly.weather[0].icon}@2x.png`}
              alt="weatherIcon"
            />
            {parseInt(dataHourly.wind_gust)}
            <br />
            Km/h
            <br />
            <br />
            Nubes
            {dataHourly.clouds}%
          </div>
        </li>
      </div>
    );
  });

  return (
    <div>
      {loading ? <Loader /> : <CardsInfoDetailsCity forhourly={forhourly} />}
    </div>
  );
}

// {!dataCityDetail ? (
//   <Loader />
// ) : (
//   dataCityDetail.hourly?.map((dataCities) => {
//     return <CardsInfoDetailsCity />;
//   })
// )}
