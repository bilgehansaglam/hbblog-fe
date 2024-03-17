import React from "react";

const FormInput = ({ name, type, htmlFor }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[500px]">
        <input
          id={name}
          aria-autocomplete={false}
          name={name}
          type={type}
          className="border-b border-gray-700 dark:border-gray-300 dark:text-white py-1 focus:border-b-2 dark:focus:border-white focus:border-blue-700 transition-colors w-full h-12 focus:outline-none peer bg-inherit "
        />
        <label
          htmlFor={name}
          className="absolute text-lg text-gray-300 left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700 dark:peer-focus:text-gray-500 dark:text-gray-500"
        >
          {name.toUpperCase()}
        </label>
      </div>
    </div>
  );
};

export default FormInput;
