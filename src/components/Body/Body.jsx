import Especie from "./Especie/Especie"
import especies from '../../store/especies.json'
import CardEspecie from "./CardEspecie"

function Body() {
  return (
    <div className="px-8">
      {
        especies.map((especie, index) => (
          <Especie key={index} imagen={especie.especie} especie={especie.nombre} descripcion={especie.descripcion} />
        ))
      }

      <div className="flex w-full gap-4 mb-8 ">
        <CardEspecie imagen={"https://images.pexels.com/photos/31677026/pexels-photo-31677026/free-photo-of-hermosas-flores-de-delhi.jpeg?auto=compress&cs=tinysrgb&w=600"}
          especie={"Linfat"} />
        <CardEspecie imagen={"https://images.pexels.com/photos/31677026/pexels-photo-31677026/free-photo-of-hermosas-flores-de-delhi.jpeg?auto=compress&cs=tinysrgb&w=600"}
          especie={"Linfat"} />
      </div>
    </div>
  )
}

export default Body