import React, { useState } from "react";
import "./style.css";
//images
import searh_icon from "../components/Assets/search.png";
import clear from "../components/Assets/clear.png";
import cloud from "../components/Assets/cloud.png";
import drizzle from "../components/Assets/drizzle.png";
import humidity from "../components/Assets/humidity.png";
import rain from "../components/Assets/rain.png";
import snow from "../components/Assets/snow.png";
import wind from "../components/Assets/wind.png";
const Home = () => {
  const api_key = "c51472dba3a1ec515b05ef4c8c48fa4f";
  // usestate
  const [wicon, setWicon] = useState(cloud);
  const search = async () => {
    const element = document.getElementsByClassName("city-input");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percentage");
    const wind = document.getElementsByClassName("wind-rain");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
    temprature[0].innerHTML = Math.floor(data.main.temp) + "\u00b0C";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(cloud);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(drizzle);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(drizzle);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(rain);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(rain);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13d"
    ) {
      setWicon(snow);
    } else [setWicon(clear)];
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="city-input"
          placeholder="Enter City Name"
        />
        <div className="search-icon">
          <img
            src={searh_icon}
            alt=""
            width="20px"
            height="15px"
            onClick={() => {
              search();
            }}
          />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} />
      </div>
      <div className="weather-temp">24C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt="" className="icon" />
          <div className="data">
            <div className="wind-rain">18 km/hr</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
