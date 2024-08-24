import { LineWave } from "react-loader-spinner";
const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <LineWave
        height="250"
        width="200"
        color="#00BFFF"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
};
export default Loader;
