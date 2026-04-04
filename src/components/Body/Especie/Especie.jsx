import React from "react"
const Overlay = React.lazy(() => import("../../shared/Overlay"))

function Especie({ especie, descripcion, imagen }) {

  return (
    <div className="h-80 mt-20 mb-2 w-full flex items-center justify-center relative overflow-hidden">
      <div className={`w-full h-full rounded-md image ${imagen}`}></div>
      <Overlay descripcion={descripcion} especie={especie} />
    </div>
  )
}

export default Especie
