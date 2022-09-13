// Componentes + Propriedades
// Componentes são compostos de funções que retornam HTML

interface ButtonProps {
  title?: string;
}

function Button(props: ButtonProps) {
  return(
    <button>
      {props.title ? props.title : "Hello World"}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="Enviar"/>
      <Button/>
    </div>
  )
}

export default App
