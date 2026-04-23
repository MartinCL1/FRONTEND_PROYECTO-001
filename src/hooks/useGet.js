//# RECORDAR CAMBIAR  LA LOGICA A UN FICHERO DIFERENTE.
import { useEffect, useState } from "react";
import { obtenerInformacion } from "../services/plantas.get.service";

const PATH = import.meta.env.VITE_IMAGENES_ENDPOINT

const useGet = (path) => {
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)
    const [respuesta, setRespuesta] = useState(null)

    useEffect(() => {
        (async () => {
            setCargando(true)
            try {
                const respuestaImagenes = await obtenerInformacion(path);
                setRespuesta(respuestaImagenes)
            } catch (Error) {
                setError(Error)
            } finally {
                setCargando(false)
            }
        })()
    }, [path])

    const singleObtenerInformacion = async (this_path) => {
        setCargando(true)

        try {
            const resPlanta = await obtenerInformacion(this_path)
        } catch (error) {
            setError(error)
        } finally {
            setCargando(false)
        }

    }
    return { cargando, error, respuesta, singleObtenerInformacion }
}

export default useGet;