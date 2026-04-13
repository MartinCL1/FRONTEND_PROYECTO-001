import React from "react"
const Overlay = React.lazy(() => import("../../shared/Overlay"))

function Especie({ especie, imagen }) {

  return (
    <div className="h-80 mt-20 mb-2 w-full flex items-center justify-center relative rounded-xl overflow-hidden">
      <div className={`w-full h-full rounded-md image ${imagen}`}></div>
      <Overlay especie={especie} />
    </div>  
  )
}

export default Especie