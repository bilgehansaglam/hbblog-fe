import React from "react";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import LOGO from "../assets/logo2.png";
import CreateIcon from "@mui/icons-material/Create";

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="w-[300px] border-4 border-gray-200 dark:border-gray-500 rounded-md h-[600px] flex flex-col  pl-4 py-4 mr-6">
        <div>
          <img src={LOGO} className="w-10 h-10 rounded-full" />
        </div>

        {/* Categories */}
        <div className="flex flex-col pl-2">
          <label className="self-start text-xl">Categories</label>
          <div className="flex flex-col mt-3 pl-4">
            <span>Yeni</span>
            <span>Teknoloji</span>
            <span>Spor</span>
          </div>
        </div>
        <div className="flex justify-center w-full mt-6">
          <button className="border-2 px-4 py-2 rounded-xl  dark:bg-gray-200 dark:hover:bg-white transition duration-150 flex gap-2 bg-gray-600 text-gray-100 hover:bg-gray-800 dark:text-gray-600 ">
            Create New Post{" "}
            <CreateIcon className="text-gray-100 dark:text-gray-500" />
          </button>
        </div>
      </div>

      {/* Create Post Area */}
      <button className="self-start ml-[-22px] ">
        <ViewHeadlineIcon fontSize="large" />
      </button>
    </div>
  );
};

export default Sidebar;
