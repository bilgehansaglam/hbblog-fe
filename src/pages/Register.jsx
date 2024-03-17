import React, { useContext } from "react";
import { Form, Link } from "react-router-dom";
import Header from "../components/Header";
import logo from "../assets/logo1.png";
import logoDark from "../assets/logodark.png";
import animatonData from "../assets/Animation - 1710603877737.json";
import Lottie from "lottie-react";
import ThemeContext from "../context/ThemeContext";
import FormInput from "../components/FormInput";

const Register = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex lg:justify-between lg:items-start w-full lg:flex lg:flex-row flex-col">
      <div className="flex  lg:h-[600px] h-[450px]">
        <Lottie animationData={animatonData} />
      </div>
      <div className="flex flex-col gap-12 lg:mr-[300px] px-12 ">
        <div className="flex items-center justify-start">
          <Link to="/">
            <img
              className="w-[150px] h-[150px]"
              src={theme === "light" ? logo : logoDark}
            />
          </Link>

          <div>
            <h4 className="dark:text-white font-mono text-2xl ml-[-24px]">
              Blog'a Kayıt Ol
            </h4>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <FormInput label="ad" name="name" type="text" />
          <FormInput label="soyad" name="name" type="text" />
          <FormInput label="e-mail" name="email" type="email" />
          <FormInput label="Şifre" name="password" type="password" />
        </div>
        <div className="font-mono text-sm text-gray-500">
          Zaten üye misin?{" "}
          <Link
            to="/login"
            className="text-blue-500 text-lg hover:text-blue-700"
          >
            Giriş yap !
          </Link>
        </div>

        <buttton className="border-none px-4 py-2 rounded-xl  dark:bg-gray-400 dark:hover:bg-white transition duration-150  gap-2 bg-gray-600 text-gray-100 hover:bg-gray-800 dark:text-gray-600  flex justify-center items-center cursor-pointer">
          Kayıt Ol
        </buttton>
      </div>
    </div>
  );
};

export default Register;
