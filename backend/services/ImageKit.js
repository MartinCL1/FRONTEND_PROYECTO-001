const ImageKit = require("@imagekit/nodejs");
require("dotenv").config();

const client = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

const crearImagenFirmada = () => {
    return client.helper.buildSrc({
        urlEndpoint: process.env.IMAGEKIT_ENDPOINT,
        src: "/nuevo/tree",
        transformation: [
            {
                focus: "center",
                format: "auto",
                quality: "auto",
                cropMode: "pad_resize",
            },
        ],
        signed: true,
        expiresIn: 300,
    });
};

const obtenerImagenes = async () => {
    return client.assets.list({
        path: "/Store",
        type: "file"
    });
};

module.exports = {
    crearImagenFirmada,
    obtenerImagenes
};
