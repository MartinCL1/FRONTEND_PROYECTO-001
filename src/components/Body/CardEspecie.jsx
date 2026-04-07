import { X } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

const CloseBoton = motion.create(X)

function CardEspecie({ especie, imagen }) {
  const variantes = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    }
  }

  const [mostrarEspecie, setMostrarEspecie] = useState(true)

  const mostrarInformacionSpecimen = () => {
    setMostrarEspecie(!mostrarEspecie)
  }

  return (
    <div onClick={mostrarInformacionSpecimen} className='size-62'>
      {
        mostrarEspecie && (
          <motion.div layoutId={`card-${especie}`} 
            className="p-2 border cursor-pointer border-gray-300/30 rounded shadow-2xs flex flex-col"
            variants={variantes}
            initial="initial"
            animate="animate"
            exit="exit">
            <div className="w-full ">
              <motion.img layoutId={`card-image-${especie}`} className="rounded" src={imagen} alt={especie}
                variants={variantes}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
              />
            </div>
            <motion.div className="py-2" layoutId={`card-title-${especie}`}
              variants={variantes}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ delay: .2 }}
            >
              <p>{especie}</p>
            </motion.div>
          </motion.div>
        )
      }
      {
        !mostrarEspecie && (
          <motion.div layoutId='card' className='fixed inset-0 z-10 bg-black/50 flex items-center justify-center'
            variants={variantes}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.1 }}
            onClick={mostrarInformacionSpecimen}
          >
            <div className='md:w-[800px] md:h-[300px] md:h-fit flex bg-white flex-col md:flex-row justify-between items-center rounded-xs p-6'>
              <CloseBoton whileHover={{ rotate: "90deg", scale: 1.2 }} className='absolute top-4 stroke-white cursor-pointer stroke-3 size-8 right-4' onClick={mostrarInformacionSpecimen} />
              <div className="w-1/3 bg-green-50 flex items-center justify-center">
                <motion.img layoutId={`card-image-${especie}`} className="size-full rounded" src={imagen} alt={especie} initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ delay: 0.1 }} />
              </div>
              <div className='flex flex-col w-1/2' layoutId={`card-title-${especie}`} initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.1 }}>
                <h2 className='text-2xl font-bold'>{especie}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam corporis quas, saepe exercitationem assumenda praesentium asperiores nostrum beatae quia illum eaque temporibus, libero mollitia perferendis quidem sed quos animi itaque?</p>
              </div>
            </div>
          </motion.div>
        )
      }
    </div>
  )
}

export default CardEspecie
