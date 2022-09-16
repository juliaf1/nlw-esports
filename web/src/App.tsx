import { useState, useEffect } from 'react';

import './styles/main.css';

import logoImg from './assets/logo.svg';
import { GameCard } from './components/GameCard';
import { CreateAdBanner } from './components/CreateAdBanner';

// useEffect(() => {}, []); useEffect syntax structure
// parameters: result, [list of useStates that trigger that result]

const API_URL = 'http://localhost:3333'

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(API_URL + '/games')
      .then(res => res.json())
      .then(data => console.log(data))
  }, []) // empty array = result is triggered one time!

  return (
    <div className="max-w-{1344px} mx-auto flex items-center flex-col py-20 px-20">
      <img src={logoImg} />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameCard bannerUrl="" title="" adsCount={1} />
      </div>

      <CreateAdBanner />
    </div>
  )
}

export default App
