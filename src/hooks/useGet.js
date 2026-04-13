//# RECORDAR CAMBIAR  LA LOGICA A UN FICHERO DIFERENTE.
import { useEffect, useState } from "react";

const useGet = (nombrePlanta) => {
    const [cargando, setCargando] = useState(null)
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
            const resPlanta = await fetch(`https://backend-proyecto-001.vercel.app/api/v1/imagenes/${nombrePlanta}`);
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

    return { cargando, error, respuesta }
}

export default useGet;