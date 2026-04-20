//# RECORDAR CAMBIAR  LA LOGICA A UN FICHERO DIFERENTE.
import { useEffect, useState } from "react";

const PATH = import.meta.env.VITE_IMAGENES_ENDPOINT

const useGet = ( path ) => {
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)
    const [respuesta, setRespuesta] = useState(null)

    useEffect(() => {
        (async () => {
            await obtenerInformacion();
        })()
    }, [])

    const obtenerInformacion = async () => {
        try {
            setCargando(true)
            setError(null)
            const resPlanta = await fetch(`https://backend-proyecto-001.vercel.app/api/v1/imagenes/${path}`);
            const urlPlanta = await resPlanta.json();
            setRespuesta(urlPlanta.imagenes)
            setCargando(false)
        } catch (error) {
            setCargando(false)
            setError(error.message)
            console.log(error.message)
        } finally {
            setCargando(false)
        }
    }

    return { cargando, error, respuesta, setRespuesta }
} 

export default useGet;