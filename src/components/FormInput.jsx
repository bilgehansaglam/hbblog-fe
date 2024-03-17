import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const FormInput = ({ name, type, label }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
    const inputType = document.getElementById("password");
    if (inputType.type === "password") {
      inputType.type = "text";
    } else {
      inputType.type = "password";
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[500px]">
        <input
          id={name}
          name={name}
          type={type}
          className="border-b border-gray-700 dark:border-gray-300 dark:text-white py-1 focus:border-b-2 dark:focus:border-white focus:border-blue-700 transition-colors w-full h-12 focus:outline-none peer bg-inherit "
        />
        <label
          htmlFor={name}
          className="absolute text-lg text-gray-300 left-0 -top-4  cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700 dark:peer-focus:text-gray-500 dark:text-gray-500"
        >
          {label.toUpperCase()}
        </label>
        {type === "password" && (
          <button className="absolute inset-y-0 right-0 flex items-center pr-3">
            {isPasswordVisible === true ? (
              <VisibilityOffIcon
                className="h-6 w-6 text-gray-400 dark:text-gray-300 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <VisibilityIcon
                className="h-6 w-6 text-gray-400 dark:text-gray-300 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormInput;
