const obtenerInformacion = async (path) => {
    try {
        const resPlanta = await fetch(`https://backend-proyecto-001.vercel.app/api/v1/imagenes/${path}`);
        const urlPlanta = await resPlanta.json();
        return urlPlanta;
    } catch (error) {
        console.error('Error al obtener la información de la planta:', error);
        throw error;
    }
}


export { obtenerInformacion }