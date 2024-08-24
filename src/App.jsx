import "./App.css";
import WeatherRender from "./views/component/WeatherRender_Comp/WeatrherRender";

function App() {
  return (
    <div>
      <p id="title">Dark Weather</p>
      <h1 id="sub-title">Seeing the weather of the whole world</h1>
      <h1 id="sub-title">
        with <span>Dark Weather!</span>
      </h1>
      <WeatherRender />
    </div>
  );
}
export default App;
