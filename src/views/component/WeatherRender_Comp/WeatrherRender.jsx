import Weathercontroller from "../../../controllers/WeatherController";
import WeatherSearch from "../WeatherSearch_Comp/WeatherSearch";
import WeatherCard from "../WeatherCard_Comp/WeatherCard";
import Loader from "../loader";
import "./Render.css";
import { useEffect, useState } from "react";

const WeatherRender = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [errorMassage, setErrorMassge] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  async function getWeatherData() {
    if (!city) return;
    setIsLoading(true);
    setErrorMassge("");
    try {
      const data = await Weathercontroller({ city });
      setWeatherData(data);
      setIsLoading(false);
    } catch (error) {
      setErrorMassge("City not found. Please enter a valid city name.");
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <div>
      <WeatherSearch setCity={setCity} />
      {isLoading ? (
        <Loader />
      ) : weatherData ? (
        <WeatherCard weatherData={weatherData} errorMassage={errorMassage} />
      ) : (
        errorMassage && <p className="error-message">{errorMassage}</p> // Display error message if present
      )}
    </div>
  );
};
export default WeatherRender;
