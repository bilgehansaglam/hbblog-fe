import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div className="w-full h-80 flex justify-evenly items-center border-t-2 bg-black border-black mt-8 pt-6 ">
      <div className="flex flex-col items-center gap-10 sm:flex ">
        <h1 className="lg:text-3xl text-xl font-roboto text-gray-400 ">
          Öneri ve şikayetlerinizi bize iletebilirsiniz !
        </h1>
        <div className="lg:flex lg:gap-10 lg:items-center flex flex-col gap-5">
          <input
            className="bg-gray-50 border-b-4 border-gray-300 py-4 px-8 rounded-lg lg:w-[600px] w-[400px]  placeholder:text-gray-400 focus-within:outline-none focus-within:bg-gray-100 focus-within:border-2"
            placeholder="Lütfen öneri/şikayet giriniz.."
          />
          <button className="h-[50px] border-b-4 border-blue-600 py-2 px-10 flex text-gray-100 justify-center items-center cursor-pointer rounded-lg bg-blue-500 hover:bg-blue-700">
            Gönder
          </button>
        </div>
        <div className="pb-2">
          <span className="text-gray-50 mb-3 font-sans text-sm">
            {" "}
            Copyright <CopyrightIcon /> 2024{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
