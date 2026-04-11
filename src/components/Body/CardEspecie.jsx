import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

const CloseBoton = motion.create(X)

function CardEspecie({ especie, imagen, descripcion }) {

  const [mostrarEspecie, setMostrarEspecie] = useState(true)

  const mostrarInformacionEspecimen = () => setMostrarEspecie(false)
  const ocultarInformacionEspecimen = () => setMostrarEspecie(true)

  return (
    <div>
      <div className={`mb-4 break-inside-avoid relative rounded-xl overflow-hidden shadow-md hover:scale-105 transition duration-400`} >
        <motion.div
          onClick={mostrarInformacionEspecimen}
          layoutId={`card-${especie}`}
          className={`p-2 border cursor-pointer border-gray-300/30 rounded shadow-2xs flex flex-col `}
          initial={{ opacity: 1 }}
          animate={{
            opacity: mostrarEspecie ? 1 : 0,
          }}
          transition={{ duration: 0.25 }}
        >
          <motion.img
            src={imagen}
            alt={especie}
            className="w-full h-auto block rounded"
          />
          <div className='p-2'>
            <p>{especie}</p>
          </div>
        </motion.div>

      </div>
      <AnimatePresence mode="wait">
        {
          !mostrarEspecie && (
            <motion.div className='fixed inset-0 z-20 bg-black/50 flex items-center justify-center'
              onClick={ocultarInformacionEspecimen}
            >
              <motion.div layoutId={`card-${especie}`} className='md:w-200 md:h-fit flex bg-white flex-col md:flex-row justify-between items-center rounded-xs p-6'>
                <CloseBoton whileHover={{ rotate: "90deg", scale: 1.2 }} className='absolute top-4 stroke-white cursor-pointer stroke-3 size-8 right-4' onClick={ocultarInformacionEspecimen} />
                <div className="md:w-1/3  flex items-center justify-center bg-black overflow-hidden rounded-[5px]">
                  <motion.img className="size-full object-contain" src={imagen} alt={especie} />
                </div>
                <div className='flex flex-col w-full md:w-1/2 gap-4' layoutId={`card-title-${especie}`} >
                  <h2 className='text-3xl font-bold w-full text-center capitalize'>{especie}</h2>
                  <p className='text-md md:text-cen   ter'>{descripcion}</p>
                </div>
              </motion.div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  )
}

export default CardEspecie
