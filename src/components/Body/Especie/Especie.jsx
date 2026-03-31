function Especie() {
  return (
    <div className="h-80 mt-20 px-8 w-full flex items-center justify-center relative">
      <div className="w-full h-full relative image">
      </div>

      <div className="flex justify-center text-white gap-4 items-center absolute flex-col w-1/2">
        <h2 className="text-5xl font-bold">Especie</h2>
        <p className="text-xl">Descripcion de la especie</p>
      </div>
    </div>
  )
}

export default Especie
  