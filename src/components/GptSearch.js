import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import { BACKGROUND_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
       <div >
        <img className="absolute -z-10" src={BACKGROUND_URL} alt="Background-img" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch