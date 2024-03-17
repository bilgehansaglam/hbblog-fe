import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo1.png";
import logoDark from "../assets/logodark.png";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link, NavLink, useLocation } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const [login, setLogin] = useState(false);
  const { theme, changeTheme } = useContext(ThemeContext);
  const { pathname } = useLocation();

  return (
    <div className="flex justify-between items-center px-8 pt-10 pb-5 mb-4 h-[150px] w-full bg-wihte dark:bg-[#22262f] dark:text-white">
      {/* LOGO */}
      <NavLink
        to="/"
        className="cursor-pointer flex pl-16  justify-center items-center overflow-hidden p-4"
      >
        <img
          src={theme === "light" ? logo : logoDark}
          className="w-[150px] transition-none object-cover "
        />
      </NavLink>

      {/* Search Area */}

      {/* Account Area */}

      <div className="flex justify-between items-center h-full overflow-hidden gap-6">
        {login ? (
          <NavLink to="/login">
            <img
              className="w-[50px] h-[50px] mr-3 rounded-full cursor-pointer "
              src="https://www.bitcoinsistemi.com/wp-content/uploads/2022/05/elon-musk-twitter-altcoin.jpg.webp"
            />
          </NavLink>
        ) : (
          pathname != "/login" && (
            <NavLink
              to="/login"
              className="flex mr-10 font-mono border-none px-6 py-1 rounded-xl  text-gray-500 font-medium hover:bg-gray-200 hover:text-gray-800 transition-none dark:text-gray-300  dark:hover:bg-gray-900 dark:hover:text-white"
            >
              <button className="flex items-center justify-between gap-3 ">
                <span className="text-lg ">Giriş Yap</span>
                <LoginIcon />
              </button>
            </NavLink>
          )
        )}

        <div className="flex justify-center items-center">
          <button onClick={changeTheme}>
            {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
