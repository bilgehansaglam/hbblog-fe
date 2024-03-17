import React, { useContext } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1710364141664.json";
import logo from "../assets/logo1.png";
import logoDark from "../assets/logodark.png";
import ThemeContext from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex w-full justify-between items-center">
      <div>
        <Lottie animationData={animationData} />
      </div>
      <div className="flex justify-center items-center mr-12">
        <img src={theme === "light" ? logo : logoDark} />
      </div>
    </div>
  );
};

export default Home;
