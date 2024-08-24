import clear_icon from "../../../assets/clear.png";
import cloud_icon from "../../../assets/cloud.png";
import drizzle_icon from "../../../assets/drizzle.png";
import rain_icon from "../../../assets/rain.png";
import snow_icon from "../../../assets/snow.png";
import wind_icon from "../../../assets/wind.png";
import "./card.css";

// const hours = currentDate.getHours().toString().padStart(2, "0");
// const minutes = currentDate.getMinutes().toString().padStart(2, "0");

const WeatherCard = ({ weatherData, errorMassage }) => {
  const time = () => {
    const dateObject = new Date();
    const hours = String(dateObject.getHours()).padStart(2, "0");
    const minutes = String(dateObject.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const selectedIcon = (data) => {
    if (data === "Clear") {
      return clear_icon;
    } else if (data === "Clouds") {
      return cloud_icon;
    } else if (data === "Drizzle") {
      return drizzle_icon;
    } else if (data === "Rain") {
      return rain_icon;
    } else if (data === "Snow") {
      return snow_icon;
    } else if (data === "Haze") {
      return wind_icon;
    }
  };

  return (
    <>
      {/* <div className="weather-info-card">
        <img src={selectedIcon(weatherData.weather[0].main)} alt="clear" className="weather-icon" />
        <p>
          <span>{weatherData.name}</span> {weatherData.main.temp}°C
        </p>
        <p style={{ fontSize: "20px" }}>Wind Speed: {weatherData.wind.speed} km</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p style={{ fontSize: "20px", marginRight: "10px" }}>{dayOfWeek[new Date().getDay()]}</p>
          <p style={{ fontSize: "20px" }}>{time()}</p>
        </div>
        <h5 style={{ fontSize: "20px" }}>{weatherData.weather[0].main}</h5>
      </div> */}
      <div className="weather-card">
        <img src={selectedIcon(weatherData.weatherDescription)} alt="clear" className="weather-icon" />
        <div className="weather-city-temp">
          <p id="cityName">{weatherData.city}</p>
          <p id="temp">{weatherData.temperture} °C</p>
        </div>
        <p>wind speed : {weatherData.windSpeed} km</p>
        <div className="weather-time">
          <p>{dayOfWeek[new Date().getDay()]} :</p>
          <p>{time()}</p>
        </div>

        <p>{weatherData.weatherDescription}</p>
      </div>
    </>
  );
};
export default WeatherCard;
