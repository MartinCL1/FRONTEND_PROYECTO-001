import { motion } from "motion/react"

function Overlay({ descripcion, especie}) {

    return (
        <motion.div  className={`flex w-full items-center justify-center text-center flex-col gap-4 absolute left-0 text-white`}>
            <motion.h1 whileInView={{ opacity: 1, y: 0, transition: {duration: 1} }} initial={{ opacity: 0, y: 20 }} className="text-6xl">{especie}</motion.h1>
            <motion.p whileInView={{ opacity: 1, y: 0, transition: {duration: 1} }} initial={{ opacity: 0, y: 20 }} className="text-lg">{descripcion}</motion.p>
        </motion.div>
    )
}   

export default Overlay
