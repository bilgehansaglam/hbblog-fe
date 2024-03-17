import React from "react";

const SearchInput = () => {
  return (
    <div className="flex relative text-gray-500 focus-within:text-gray-700">
      <input
        type="search"
        className="rounded-2xl border-b-2 font-roboto   outline-none h-[30px] text-gray-500 w-[450px]  pr-6 pl-[70px] py-6  placeholder-gray-300  dark:border-none"
        placeholder="blog ara"
      />
      <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="pointer-events-none absolute w-9  pr-2 border-r-2 fill-gray-500 transition ml-3"
        >
          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
        </svg>
      </div>
      <button className="absolute end-0 bottom-1/2 translate-y-1/2 p-3.5  text-sm font-medium text-white bg-gray-700 rounded-lg border border-gray-700 hover:bg-gray-800 focus:ring-3 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
        Ara
      </button>
    </div>
  );
};

export default SearchInput;
