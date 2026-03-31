
/*
  # Recordatorio: Optimizar la imagen
*/

import headerBack from '../../assets/header.jpg'
import './header.css'
import { motion } from 'framer-motion'

function Header() {
  return (
    <header className="h-screen w-full">
      <div className="h-screen w-full flex md:flex flex-col md:flex-row">
        {/* Left side - Image */}
        <div className="w-full h-screen overflow-hidden">
          <img src={headerBack} alt="Header"
            className='w-full h-full object-cover mask-gradient object-center'
          />
        </div>

        {/* Right side - Text */}
        <div className='w-full h-screen flex items-center justify-center p-8'>
          <div className='text-black'>
            <motion.h1 className='border-b-4 text-2xl uppercase text-center md:text-5xl'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .5 }}
            >
              Explore <span className='tracking-widest'>the green kingdom</span>
            </motion.h1>

            <motion.p className="mt-4 text-xs backdrop-blur-xs text-black/80 md:text-lg text-center rounded-xl bg-white/80"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .5, delay: .2 }}
            >
              The plant kingdom brings together fundamental organisms for life,
              capable of producing oxygen, sustaining ecosystems and contributing
              immense natural diversity to the planet.
            </motion.p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
