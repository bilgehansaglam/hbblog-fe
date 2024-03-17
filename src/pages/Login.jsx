import React, { useContext } from "react";
import { Form, Link } from "react-router-dom";
import Header from "../components/Header";
import logo from "../assets/logo1.png";
import logoDark from "../assets/logodark.png";
import animatonData from "../assets/Animation - 1710603877737.json";
import Lottie from "lottie-react";
import ThemeContext from "../context/ThemeContext";
import FormInput from "../components/FormInput";

const Login = () => {
  const { theme } = useContext(ThemeContext);
  return (
    // <div className="flex justify-center items-center w-full ">
    //   <div className="relative flex w-[500px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    //     <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
    //       <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
    //         Giriş
    //       </h3>
    //     </div>
    //     <div className="flex justify-center items-center    w-full">
    //       <Link to="/">
    //         <img className="w-[100px] h-[100px] rounded-full" src={logo} />
    //       </Link>
    //     </div>
    //     <div className="flex flex-col gap-4 p-6">
    //       <div className="relative h-11 w-full min-w-[200px]">
    //         <input
    //           placeholder=""
    //           className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    //         />
    //         <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    //           Email
    //         </label>
    //       </div>
    //       <div className="relative h-11 w-full min-w-[200px]">
    //         <input
    //           placeholder=""
    //           type="password"
    //           className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    //         />
    //         <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    //           Şifre
    //         </label>
    //       </div>
    //       <div className="-ml-2.5">
    //         <div className="inline-flex items-center">
    //           <label
    //             data-ripple-dark="true"
    //             for="checkbox"
    //             className="relative flex cursor-pointer items-center rounded-full p-3"
    //           >
    //             <input
    //               id="checkbox"
    //               className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-cyan-500 checked:bg-cyan-500 checked:before:bg-cyan-500 hover:before:opacity-10"
    //               type="checkbox"
    //             />
    //             <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
    //               <svg
    //                 stroke-width="1"
    //                 stroke="currentColor"
    //                 fill="currentColor"
    //                 viewBox="0 0 20 20"
    //                 className="h-3.5 w-3.5"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   clip-rule="evenodd"
    //                   d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //                   fill-rule="evenodd"
    //                 ></path>
    //               </svg>
    //             </span>
    //           </label>
    //           <label
    //             for="checkbox"
    //             className="mt-px cursor-pointer select-none font-light text-gray-700"
    //           >
    //             Beni Hatırla
    //           </label>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="p-6 pt-0">
    //       <button
    //         data-ripple-light="true"
    //         type="button"
    //         className="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    //       >
    //         Giriş Yap
    //       </button>
    //       <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
    //         Henüz üye değil misiniz?
    //         <Link
    //           className="ml-1 block font-sans text-sm font-bold leading-normal text-cyan-500 antialiased"
    //           to="/register"
    //         >
    //           Hemen üye ol
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="flex justify-between items-start w-full">
      <div className="flex  h-[600px]">
        <Lottie animationData={animatonData} />
      </div>
      <div className="flex flex-col gap-12 mr-[300px]">
        <div className="flex items-center justify-start">
          <Link to="/">
            <img
              className="w-[150px] h-[150px]"
              src={theme === "light" ? logo : logoDark}
            />
          </Link>

          <div>
            <h4 className="dark:text-white font-mono text-2xl ml-[-24px]">
              Blog'a Giriş Yap
            </h4>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <FormInput name="email" type="email" />
          <FormInput name="password" type="password" />
        </div>
      </div>
    </div>
  );
};

export default Login;
