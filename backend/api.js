const express = require('express');
const routeImagenes = express.Router();
const { crearImagenFirmada, obtenerImagenes } = require('./services/ImageKit');

routeImagenes.get('/v1/imagenes', async (request, response) => {
    try {
        const imageUrl = crearImagenFirmada();
        const imagenes = await obtenerImagenes();
        console.log(imagenes)
        response.status(200).json({ imageUrl, imagenes });
    } catch (error) {
        response.status(500).json({
            error: 'No se pudieron obtener las imagenes de ImageKit',
            detalle: error.message
        });
    }
});

module.exports = routeImagenes;
