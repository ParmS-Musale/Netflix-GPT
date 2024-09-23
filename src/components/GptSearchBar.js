import React from "react";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
  return (
    <div className="flex items-center justify-center py-28">
      <form className="flex w-full max-w-xl bg-gray-800">
        <input
          type="text"
          className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-800 text-white placeholder-gray-400"
          placeholder={lang.hindi.gptSearchPlaceholder}
        />
        <button
          type="submit"
          className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-r-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white-500"
        >
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
