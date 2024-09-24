import React from "react";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />

      <div className="flex items-center space-x-4">
        {showGptSearch && (
          <select
            className=" font-bold bg-red-500 text-black px-4 py-2 rounded-lg focus:outline-none  hover:bg-red-700"
            onClick={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          className=" font-bold py-2 px-4 mx-4 my-2 bg-red-500 hover:bg-red-700 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={handleGptSearchClick}
        >
          {showGptSearch ? "Home" : "GPT Search"}
        </button>
        
        <button className="font-bold py-2 px-4 mx-4 my-2 bg-red-500 hover:bg-red-700 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-white-500">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
