import './styles/main.css';

import logoImg from './assets/logo.svg';

function App() {
  return (
    <div className="max-w-{1344px} mx-auto flex items-center flex-col py-20">
      <img src={logoImg} />
    </div>
  )
}

export default App
