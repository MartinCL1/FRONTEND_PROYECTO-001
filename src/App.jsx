import './App.css'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Contexto } from './Context'
import useGet from './hooks/useGet'

function App() {
  const { respuesta, cargando, error, setRespuesta } = useGet('Fondos/')

  return (
    <div className="App font-sora">
      <Contexto.Provider value={{respuesta, setRespuesta}}>
        <Header />
        <Body />
        <Footer />
      </Contexto.Provider>
    </div>
  )
}

export default App
