import Especie from "./Especie/Especie"
import especies from '../../store/especies.json'
import ejemplos from '../../store/plantas.json'
import CardEspecie from "./CardEspecie"
import { useEffect, useState } from "react"

function Body() {
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    (async() => {
      const linkImagen = await fetch("http://localhost:3000/api/v1/imagenes")
      const imageResponse = await linkImagen.json()
      
      setImagen(imageResponse.imageUrl)
    })()
  }, [])

  return (
    <div className="px-8">
      <Especie key={"1"} imagen={especies[0].especie} especie={especies[0].nombre} descripcion={especies[0].descripcion} />
      <div className="mb-4 columns-1 sm:columns-2 md:columns-4 lg:columns-4 gap-4">
        {
          ejemplos["gimnospermas"].map((especie, index) => (
            <CardEspecie key={index} imagen={especie.imagen} especie={especie.nombre} descripcion={especie.descripcion} />
          ))
        }
      </div>

      <Especie key={"2"} imagen={especies[1].especie} especie={especies[1].nombre} descripcion={especies[1].descripcion} />

      <div className="mb-4 columns-1 sm:columns-2 md:columns-4 lg:columns-4 gap-4">
        {
          ejemplos["briofitas"].map((especie, index) => (
            <CardEspecie key={index} imagen={especie.imagen} especie={especie.nombre} descripcion={especie.descripcion} />
          ))
        }
      </div>
      <Especie key={"3"} imagen={especies[2].especie} especie={especies[2].nombre} descripcion={especies[2].descripcion} />
      <div className="mb-4 columns-1 sm:columns-2 md:columns-4 lg:columns-4 gap-4">
        {
          ejemplos["angiospermas"].map((especie, index) => (
            <CardEspecie key={index} imagen={especie.imagen} especie={especie.nombre} descripcion={especie.descripcion} />
          ))
        }
      </div>
      {/* {imagen && (
        <img
          src={imagen}
          alt="Imagen desde ImageKit"
        />
      )} */}  
      
    </div>
  )
}

export default Body
