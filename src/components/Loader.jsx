import { ThreeCircles } from "react-loader-spinner";

function Loader() {
  return (
    <div className=" loader h-screen flex justify-center items-center bg-primaryLinear">
      <ThreeCircles
        height="100"
        width="100"
        color="#06223F"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
}

export default Loader;
