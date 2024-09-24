import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    // trigger GPT search

    const query =
      "Act as a Movie recommondation system " +
      searchText.current.value +
      " only give the name of 5 movies with coma separated. i will provide example ahead. example moviname1,moviname2,moviname3,moviname4,moviname5. just provide name with coma separated not text";
  };

  return (
    <div className="flex items-center justify-center py-28">
      <form
        className="flex w-full max-w-xl bg-gray-800"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-800 text-white placeholder-gray-400"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button
          type="submit"
          className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-r-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white-500"
          onClick={handleGptSearchClick}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
