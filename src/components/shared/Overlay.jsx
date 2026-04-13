import { motion } from "motion/react"

function Overlay({ especie }) {

    return (
        <motion.div className={`flex w-full h-full items-center justify-center text-center flex-col gap-4 absolute left-0 text-white`}
            initial={{backdropFilter: "blur(0px)"}}
            whileInView={{ backdropFilter: "blur(5px)", transition: { duration: 1, delay: .5 } }}
        >
            <motion.h1 whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }} initial={{ opacity: 0, y: 20 }} 
                className="md:text-6xl text-4xl">
                {especie.nombre}
            </motion.h1>
            <motion.p 
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }} initial={{ opacity: 0, y: 20 }} 
                className="md:text-lg text-sm px-10">
                {especie.descripcion}
            </motion.p>
        </motion.div>
    )
}

export default Overlay
