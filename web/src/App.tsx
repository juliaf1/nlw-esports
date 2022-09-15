import './styles/main.css';

import logoImg from './assets/logo.svg';

function App() {
  return (
    <div className="max-w-{1344px} mx-auto flex items-center flex-col py-20">
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

      <div className="bg-[#2A2634] px-8 py-6 mt-8 self-stretch rounded-lg">
      </div>
    </div>
  )
}

export default App
