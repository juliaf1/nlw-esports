import './styles/main.css';

import logoImg from './assets/logo.svg';

function App() {
  return (
    <div className="max-w-{1344px} mx-auto flex items-center flex-col py-20 px-20">
      <img src={logoImg} />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="game-1.png" alt="" />
          
          <div className="w-full h-full px-4 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 flex flex-col justify-end">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative">
          <img src="game-2.png" alt="" />
          
          <div className="w-full h-full px-4 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 flex flex-col justify-end">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative">
          <img src="game-3.png" alt="" />
          
          <div className="w-full h-full px-4 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 flex flex-col justify-end">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative">
          <img src="game-4.png" alt="" />
          
          <div className="w-full h-full px-4 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 flex flex-col justify-end">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative">
          <img src="game-5.png" alt="" />
          
          <div className="w-full h-full px-4 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 flex flex-col justify-end">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        
        <a href="" className="relative">
          <img src="game-6.png" alt="" />
          
          <div className="w-full h-full px-4 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 flex flex-col justify-end">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-16 pt-1">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-white text-2xl font-black block">Não encontrou o seu duo?</strong>
            <span className="text-zinc-400 ">Publique um anúncio para encontrar outros jogadores.</span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded">
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
