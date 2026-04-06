function CardEspecie({ especie, imagen }) {
  return (
    <div className="p-2 border cursor-pointer border-gray-300/30 rounded shadow-2xs flex flex-col">
      <div className="">
        <img className="w-72 rounded" src={imagen} alt={especie} />
      </div>
      <div className="py-2">
        <h3>{especie}</h3>
      </div>
    </div>
  )
}

export default CardEspecie
