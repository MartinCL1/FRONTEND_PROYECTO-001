import Especie from "./Especie/Especie"
import especies from '../../store/especies.json'

function Body() {
  return (
    <div className="h-dvh">
      {
        especies.map((especie, index) => (
          <Especie key={index} imagen={especie.especie} especie={especie.nombre} descripcion={especie.descripcion} />
        ))
      }
    </div>
  )
}

export default Body