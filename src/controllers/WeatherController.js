import axios from "axios";
import WeatherModel from "../models/WeatherModel";

const Weathercontroller = ({ city }) => {
  console.log(city);
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=979e237b0f5e09e3c71616ac4781af58&units=metric`
      )
      .then((response) => {
        resolve(WeatherModel(response.data));
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export default Weathercontroller;
