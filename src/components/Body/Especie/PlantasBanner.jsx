import React, { useContext, useEffect, useState } from "react";
import useGet from "../../../hooks/useGet";
import PlantasBannerSkeleton from "../../skeletons/Body/PlantasBannerSkeleton";
import especies from '../../../store/especies.json'
import { Contexto } from "../../../Context";
import { obtenerInformacion } from "../../../services/plantas.get.service";
const CardEspecie = React.lazy(() => import('./CardEspecie'))
const Especie = React.lazy(() => import("./Especie"));

const PlantasBanner = ({ especieNombre }) => {
  const {imagenHeader} = useContext(Contexto) 
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [respuesta, setRespuesta] = useState(null)

  useEffect(() => { // UseEffect para cargar la informacion de las imagenes.
    (async ()=> {
      setCargando(true)
      try {
        const inforamcion = await obtenerInformacion(especieNombre)
        setRespuesta(inforamcion)
      } catch (error) {
        setError(error)
      } finally {
        setCargando(false)
      }
    })()
  }, [ imagenHeader ])

  return (cargando && !respuesta) ? <PlantasBannerSkeleton /> : (
    <div className="mt-50">
      <Especie key={especieNombre} imagen={especieNombre} especie={especies[especieNombre]} />
      <div className="mb-4 px-8 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8 py-5">
        {
          respuesta.imagenes?.map((especie, index) => (
            <CardEspecie key={index} imagen={especie.imagenFirmada} especie={especieNombre} identificador={especie.imagenIdentificador} />
          ))
        }
      </div>
    </div>
  )
}

export default PlantasBanner;