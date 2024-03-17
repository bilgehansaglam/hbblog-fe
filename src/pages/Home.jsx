import React, { useContext } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1710364141664.json";
import logo from "../assets/logo1.png";
import logoDark from "../assets/logodark.png";
import ThemeContext from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex w-full lg:flex-row flex-col justify-between items-center lg:h-lvh ">
      <div className="lg:w-full w-[80%]">
        <Lottie animationData={animationData} />
      </div>
      <div className="flex justify-center items-center lg:mr-12 lg:w-full lg:h-full w-[50%]">
        <img src={theme === "light" ? logo : logoDark} />
      </div>
    </div>
  );
};

export default Home;
