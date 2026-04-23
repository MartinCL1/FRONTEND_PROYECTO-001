import { useEffect, useState } from 'react'
import './App.css'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Contexto } from './Context'
import useGet from './hooks/useGet'

function App() {
  const { respuesta, cargando, error } = useGet('Fondos/')
  const [imagenHeader, setImagenHeader] = useState("")

  useEffect(() => {
    if(respuesta === null) return
    const fondo = respuesta.imagenes?.find(elemento => elemento.imagenIdentificador === "header")
    if (fondo) return setImagenHeader(fondo.imagenFirmada)
  }, [respuesta])

  return (
    <div className="App font-sora">
      <Contexto.Provider value={{ respuesta: respuesta?.imagenes, imagenHeader }}>
        <Header imagenHeader={imagenHeader} />
        <Body />
        <Footer />
      </Contexto.Provider>
    </div>
  )
}

export default App
