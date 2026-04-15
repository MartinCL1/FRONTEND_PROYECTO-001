import React from "react";
import useGet from "../../../hooks/useGet";
import PlantasBannerSkeleton from "../../skeletons/Body/PlantasBannerSkeleton";
import especies from '../../../store/especies.json'
const CardEspecie = React.lazy(() => import('./CardEspecie'))
const Especie = React.lazy(() => import("./Especie"));

const PlantasBanner = React.memo(({ especieNombre }) => {
  const { cargando, respuesta } = useGet(especieNombre)

  return cargando ? <PlantasBannerSkeleton /> : (
    <div className="mt-50">
      <Especie key={especieNombre} imagen={especieNombre} especie={especies[especieNombre]} />
      <div className="mb-4 px-8 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8 py-5">
        {
          respuesta?.map((especie, index) => (
            <CardEspecie key={index} imagen={ especie.imagenFirmada } especie={especieNombre} identificador={ especie.imagenIdentificador } />
          ))
        }
      </div>
    </div>
  )}) 

export default PlantasBanner;