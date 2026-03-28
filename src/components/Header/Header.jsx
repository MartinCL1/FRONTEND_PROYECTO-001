
/*
  # Recordatorio: Optimizar la imagen
*/

import headerBack from '../../assets/header.png'
import PlantasHeader from '../shared/PlantasHeader'
import './header.css'
import { motion } from 'framer-motion'

function Header() {
  return (
    <header className="h-screen w-full relative">
      <div className="h-screen w-full relative">
        <img src={headerBack} alt="Header"
          className='w-full h-screen object-cover object-center absolute'
        />
        <motion.h1 className='absolute top-1/3 left-1/6 text-white sm:text-5xl text-shadow-lg text-shadow-gray-950 font-sora text-2xl'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
        >
          EXPLORE <span className='text-emerald-950  sm:text-5xl text-2xl text-shadow-lg text-shadow-gray-800 tracking-widest'>THE GREEN KINGDOM</span>
        </motion.h1>
      </div>  
    </header>
  )
}

export default Header