import React from "react";
import Post from "../components/Post";
import CreateIcon from "@mui/icons-material/Create";
import Categories from "../components/Categories";
import SearchInput from "../components/SearchInput";

const Blogs = () => {
  return (
    <div className="flex flex-col w-full gap-10">
      <div className="flex lg:justify-end justify-center">
        <SearchInput />
      </div>

      <div className="flex items-center lg:flex-row justify-center flex-col">
        <Categories />
        <div className="flex lg:justify-end justify-center w-full mt-6">
          <button className="border-2 px-4 py-2 rounded-xl  dark:bg-gray-300 dark:hover:bg-white transition duration-150 flex gap-2 bg-gray-600 text-gray-100 hover:bg-gray-800 dark:text-gray-600 cursor-pointer">
            Post Oluştur
            <CreateIcon className="text-gray-100 dark:text-gray-500" />
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="text-2xl dark:text-white font-mono">POSTLAR</h1>
      </div>
      <div className="flex justify-center lg:flex-">
        <div className="grid lg:grid-cols-3 justify-items-center gap-x-10 gap-y-16">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
