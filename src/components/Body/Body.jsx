import Especie from "./Especie/Especie"
import especies from '../../store/especies.json'
import CardEspecie from "./CardEspecie"
import { AnimatePresence } from "motion/react"

function Body() {
  return (
    <div className="px-8">
      {
        especies.map((especie, index) => (
          <Especie key={index} imagen={especie.especie} especie={especie.nombre} descripcion={especie.descripcion} />
        ))
      }

      <div className="flex max-w-full md:flex-row flex-col w-full h-auto gap-4 mb-8 flex-wrap justify-center">
        <AnimatePresence mode="wait">
          <CardEspecie imagen={"https://images.pexels.com/photos/31677026/pexels-photo-31677026/free-photo-of-hermosas-flores-de-delhi.jpeg?auto=compress&cs=tinysrgb&w=600"}
            especie={"Linf"} />
          <CardEspecie imagen={"https://images.pexels.com/photos/31677026/pexels-photo-31677026/free-photo-of-hermosas-flores-de-delhi.jpeg?auto=compress&cs=tinysrgb&w=600"}
            especie={"Liat"} />
          <CardEspecie imagen={"https://images.pexels.com/photos/31677026/pexels-photo-31677026/free-photo-of-hermosas-flores-de-delhi.jpeg?auto=compress&cs=tinysrgb&w=600"}
            especie={"Li"} />
          <CardEspecie imagen={"https://images.pexels.com/photos/31677026/pexels-photo-31677026/free-photo-of-hermosas-flores-de-delhi.jpeg?auto=compress&cs=tinysrgb&w=600"}
            especie={"fat"} />
          <CardEspecie imagen={"https://images.pexels.com/photos/31677026/pexels-photo-31677026/free-photo-of-hermosas-flores-de-delhi.jpeg?auto=compress&cs=tinysrgb&w=600"}
            especie={"Linddfat"} />
          <CardEspecie imagen={"https://images.pexels.com/photos/31677026/pexels-photo-31677026/free-photo-of-hermosas-flores-de-delhi.jpeg?auto=compress&cs=tinysrgb&w=600"}
            especie={"Linafat"} />
          <CardEspecie imagen={"https://images.pexels.com/photos/31677026/pexels-photo-31677026/free-photo-of-hermosas-flores-de-delhi.jpeg?auto=compress&cs=tinysrgb&w=600"}
            especie={"Linaaaafat"} />
          <CardEspecie imagen={"https://images.pexels.com/photos/31677026/pexels-photo-31677026/free-photo-of-hermosas-flores-de-delhi.jpeg?auto=compress&cs=tinysrgb&w=600"}
            especie={"Linaafat"} />
          <CardEspecie imagen={"https://images.pexels.com/photos/31677026/pexels-photo-31677026/free-photo-of-hermosas-flores-de-delhi.jpeg?auto=compress&cs=tinysrgb&w=600"}
            especie={"adoas"} />
          <CardEspecie imagen={"https://images.pexels.com/photos/31677026/pexels-photo-31677026/free-photo-of-hermosas-flores-de-delhi.jpeg?auto=compress&cs=tinysrgb&w=600"}
            especie={"ioeory"} />
          <CardEspecie imagen={"https://images.pexels.com/photos/31677026/pexels-photo-31677026/free-photo-of-hermosas-flores-de-delhi.jpeg?auto=compress&cs=tinysrgb&w=600"}
            especie={"mv,nb"} />
          <CardEspecie imagen={"https://images.pexels.com/photos/31677026/pexels-photo-31677026/free-photo-of-hermosas-flores-de-delhi.jpeg?auto=compress&cs=tinysrgb&w=600"}
            especie={"ñ{.á"} />
          <CardEspecie imagen={"https://images.pexels.com/photos/31677026/pexels-photo-31677026/free-photo-of-hermosas-flores-de-delhi.jpeg?auto=compress&cs=tinysrgb&w=600"}
            especie={"pasda"} />
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Body