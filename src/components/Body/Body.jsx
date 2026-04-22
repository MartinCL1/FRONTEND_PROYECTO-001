import React from "react"
const PlantasBanner = React.lazy(()=> import('./Especie/PlantasBanner'))

function Body() {
  return (
    <div className="">
      <PlantasBanner key={1} especieNombre={"gimnospermas"} />
      <PlantasBanner key={2} especieNombre={"briofitas"} />
      <PlantasBanner key={3} especieNombre={"angiospermas"} />
    </div>
  )
}

export default Body
