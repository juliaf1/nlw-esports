import './styles/main.css';

import logoImg from './assets/logo.svg';

function App() {
  return (
    <div className="max-w-{1344px} mx-auto flex items-center flex-col py-20">
      <img src={logoImg} />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="">
          <img src="game-1.png" alt="" />
        </a>
        <a href="">
          <img src="game-2.png" alt="" />
        </a>
        <a href="">
          <img src="game-3.png" alt="" />
        </a>
        <a href="">
          <img src="game-4.png" alt="" />
        </a>
        <a href="">
          <img src="game-5.png" alt="" />
        </a>
        <a href="">
          <img src="game-6.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default App
