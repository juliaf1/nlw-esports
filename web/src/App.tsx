import { MagnifyingGlassPlus } from 'phosphor-react';

import './styles/main.css';

import logoImg from './assets/logo.svg';

import { GameCard } from './components/GameCard';

function App() {
  return (
    <div className="max-w-{1344px} mx-auto flex items-center flex-col py-20 px-20">
      <img src={logoImg} />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameCard
          bannerUrl=''
          title=''
          adsCount={1}
        />
      </div>

      <div className="bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-16 pt-1">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center flex-wrap">
          <div>
            <strong className="text-white text-2xl font-black block">Não encontrou o seu duo?</strong>
            <span className="text-zinc-400 ">Publique um anúncio para encontrar outros jogadores.</span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center justify-center gap-2">
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
