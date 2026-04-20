import React, { useContext, useRef } from 'react';
import cerezo from '../../assets/cerezo.jpg'
import { AnimatePresence, motion, useInView, useScroll, useTransform } from 'motion/react'
import { Contexto } from '../../Context';

const Footer = React.memo(() => {
    const { respuesta, setRespuesta } = useContext(Contexto)
    const footer = useRef(null)
    const overlayRef = useRef(null)

    const { scrollYProgress } = useScroll({ target: footer, offset: ["start end", "end start"] })
    const inview = useInView(overlayRef, { amount: .9 })

    const transformOverlay = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"])
    const backgroundOverlay = useTransform(scrollYProgress, [.6, 0], ["#00000019", "#000"])

    return (
        <footer className="h-dvh relative overflow-hidden" ref={footer}>
            <img src={respuesta?.cerezo ? respuesta.cerezo?.imagenFirmada : ""} className='object-cover size-full backdrop-blur-xl mask-[radial-gradient(circle,black_50%,transparent_100%)]' alt="asdas" />

            <motion.div className='absolute h-full text-white flex justify-center items-center w-full'
                style={{ top: transformOverlay, background: backgroundOverlay }}
                ref={overlayRef}
            >
                <AnimatePresence>
                    {
                        inview && <motion.div initial={{ opacity: 0, x: 300 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ opacity: 0, x: -300 }}
                            transition={{ ease: "easeInOut", bounce: 0 }}
                            className='flex flex-col items-center gap-4 text-center p-8'>
                            <h1 className='text-6xl text-stone text-shadow-2xs text-shadow-black'>
                                Quick Fact
                            </h1>
                            <p className='max-w-xl text-base md:text-lg'>
                                Las plantas pueden comunicarse entre sí a través de redes subterráneas de hongos y enviar señales químicas para avisar a otras de un ataque de insectos.
                            </p>
                        </motion.div>
                    }
                </AnimatePresence>
            </motion.div>
        </footer>
    )
})

export default Footer;