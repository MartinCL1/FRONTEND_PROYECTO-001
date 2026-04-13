import React, { useEffect } from "react";
import useGet from "../../hooks/useGet";
import PlantasBannerSkeleton from "../skeletons/Body/PlantasBannerSkeleton";
import especies from '../../store/especies.json'
const CardEspecie = React.lazy(() => import('./Especie/CardEspecie'))
const Especie = React.lazy(() => import("./Especie/Especie"));


const PlantasBanner = ({ especieNombre }) => {
  const { cargando, error, respuesta } = useGet(especieNombre)

  return cargando ? <PlantasBannerSkeleton /> : (
    <div>
      <Especie key={especieNombre} imagen={especieNombre} especie={especies[especieNombre]} />
      <div className="mb-4 columns-1 sm:columns-2 md:columns-4 lg:columns-4 gap-4">
        {
          respuesta?.map((especie, index) => (
            <CardEspecie key={index} imagen={ especie.imagenFirmada } especie={especieNombre} identificador={ especie.imagenIdentificador } />
          ))
        }
      </div>
    </div>
  )
}

export default PlantasBanner;