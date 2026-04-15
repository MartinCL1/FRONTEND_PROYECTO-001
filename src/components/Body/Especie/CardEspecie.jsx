import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import CardEspecieSkeleton from '../../skeletons/Body/CardEspecieSkeleton'
import plantas from '../../../store/plantas.json'

const CloseBoton = motion.create(X)

function CardEspecie({ especie, imagen, identificador }) {

  const [mostrarEspecie, setMostrarEspecie] = useState(true)
  const [cargado, setCargado] = useState(false)
  const [planta, setPlanta] = useState(null)

  const mostrarInformacionEspecimen = () => {
    desactivarScroll()
    setMostrarEspecie(false)
  }
  const ocultarInformacionEspecimen = () => {
    activarScroll()
    setMostrarEspecie(true)
  }

  const desactivarScroll = () => {
    document.body.style.overflow = "hidden  "
  }

  const activarScroll = () => {
    document.body.style.overflow = "auto"
  }

  const cargadoCompletamente = () => {
    setCargado(true)
  }

  useEffect(() => {
    const [nuevaPlanta] = plantas[especie]?.filter(especie => especie.identificador === identificador)
    setPlanta(nuevaPlanta)
  }, [especie])

  return !cargado ? <CardEspecieSkeleton key={imagen} url={imagen} carga={cargadoCompletamente} /> : (
    <div>
      <div className={`mb-4 break-inside-avoid relative rounded-xl border border-slate-300 bg-white overflow-hidden shadow-md hover:scale-102 transition duration-400`} >
        <motion.div
          onClick={mostrarInformacionEspecimen}
          layoutId={`card-${identificador}`}
          className={`p-2 border cursor-pointer border-gray-300/30 rounded shadow-2xs flex flex-col `}
          initial={{ opacity: 1 }}
          animate={{
            opacity: mostrarEspecie ? 1 : 0,
          }}
          transition={{ duration: 0.25 }}
        >
          <motion.img
            loading='lazy'
            src={imagen}
            alt={especie}
            className="w-full h-auto block rounded"
          />
          <div className='p-2 capitalize text-center'>
            <p>{planta?.nombre}</p>
          </div>
        </motion.div>

      </div>
      <AnimatePresence mode="wait">
        {
          !mostrarEspecie && (
            <motion.div className='fixed inset-0 z-20 bg-black/50 flex items-center justify-center overscroll-y-contain'
              onClick={ocultarInformacionEspecimen}
            >
              <motion.div layoutId={`card-${identificador}`} className='md:w-200 gap-y-10 w-11/12 md:h-fit flex bg-white flex-col md:flex-row justify-between items-center rounded-sm p-8 max-h-150'>
                <CloseBoton whileHover={{ rotate: "90deg", scale: 1.2 }} className='absolute top-4 stroke-white cursor-pointer stroke-3 size-8 right-4' onClick={ocultarInformacionEspecimen} />
                <div className="md:w-1/3  flex items-center justify-center bg-black overflow-hidden rounded-[5px]">
                  <motion.img className="size-full object-contain" loading='lazy' src={imagen} alt={especie} />
                </div>
                <div className='flex flex-col w-full md:w-1/2 gap-4' layoutId={`card-title-${identificador}`} >
                  <h2 className='text-3xl font-bold w-full text-center capitalize'>{planta.nombre}</h2>
                  <p className='text-md md:text-center'>{planta.descripcion}</p>
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
