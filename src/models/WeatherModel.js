const WeatherModel = (data) => {
  return {
    id: data.id,
    city: data.name,
    temperture: data.main.temp,
    windSpeed: data.wind.speed,
    weatherIcon: data.weather[0].icon,
    weatherDescription: data.weather[0].main,
  };
};
export default WeatherModel;
