import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';

import './styles/main.css';

import logoImg from './assets/logo.svg';
import { GameCard } from './components/GameCard';
import { CreateAdBanner } from './components/CreateAdBanner';

// useEffect(() => {}, []); useEffect syntax structure
// parameters: result, [list of useStates that trigger that result]

const API_URL = 'http://localhost:3333'

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch(API_URL + '/games')
      .then(res => res.json())
      .then(data => setGames(data))
  }, []) // empty array = result is triggered one time!

  return (
    <div className="max-w-{1344px} mx-auto flex items-center flex-col py-20 px-20">
      <img src={logoImg} />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        { games.slice(0, 6).map(game => {
            return(
              <GameCard
                key={game.id}
                bannerUrl={game.bannerUrl}
                title={game.title}
                adsCount={game._count.ads}
              />
            )
          })
        }
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="bg-[#2A2634] fixed py-8 px-10 rounded-lg w-[480px] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>

            <Dialog.Content>
              <form action="">
                <div>
                  <label htmlFor="game">Qual o game?</label>
                  <input id="game" placeholder="Qual o game que deseja jogar?" />
                </div>

                <div>
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <input id="name" placeholder="Como te chamam dentro do game?" />
                </div>

                <div>
                  <div>
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <input type="number" id="yearsPlaying" placeholder="Tudo bem ser ZERO" />
                  </div>

                  <div>
                    <label htmlFor="discord">Seu Discord</label>
                    <input id="discord" placeholder="Usuário#0000" />
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor="weekDays">Quando costumar jogar?</label>
                  </div>
                  
                  <div>
                    <label htmlFor="hourStart">Qual o horário do dia?</label>

                    <div>
                      <input id="hourStart" type="time" placeholder="De" />
                      <input id="hourEnd" type="time" placeholder="Até" />
                    </div>
                  </div>
                </div>

                <div>
                  <input id="voice" type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>

                <footer>
                  <button>Cancelar</button>
                  <button type="submit">
                    <GameController />
                    Encontrar duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
