import React from "react";

const Categories = () => {
  return (
    <div className="flex gap-16 lg:pl-16 text-xl font-roboto dark:text-white text-gray-500">
      <span className="cursor-pointer hover:text-gray-300 active:underline  dark:hover:text-gray-400">
        Yeni
      </span>
      <span className="cursor-pointer hover:text-gray-300 active:underline  dark:hover:text-gray-400">
        Teknoloji
      </span>
      <span className="cursor-pointer hover:text-gray-300 active:underline  dark:hover:text-gray-400">
        Spor
      </span>
      <span className="cursor-pointer hover:text-gray-300 active:underline  dark:hover:text-gray-400">
        Sosyal
      </span>
    </div>
  );
};

export default Categories;
