import React, { useContext, useEffect, useState } from "react"
import { Contexto } from "../../../Context"
const Overlay = React.lazy(() => import("../../shared/Overlay"))

function Especie({ especie, imagen }) {
  const { respuesta, setRespuesta } = useContext(Contexto)
  const [ imagenFondo, setImagenFondo ] = useState('')


  useEffect(() => {      
   setImagenFondo(respuesta[imagen]?.imagenFirmada)
   console.log(respuesta[imagen]?.imagenFirmada )
  }, [respuesta])

  return (
    <div className="h-dvh mt-20 mb-2 w-full flex items-center justify-center relative rounded-sm overflow-hidden">
      <div className={`w-full h-full rounded-m`}>
        <img className="size-full object-cover" src={imagenFondo} alt={imagenFondo} />
      </div>
      <Overlay especie={especie} />
    </div>  
  )
}

export default Especie