const router = require('express').Router();

module.exports = (wagner) => {

    const placeCtrl = wagner.invoke((Place) =>
        require('../controllers/place.controller')(Place));

    //Definiendo para estas rutas que sera un get, recibe dos parametros, el primero es la ruta conectada y el segundo es un metodo raro que puede tomar mas funciones.
    router.get('/', (req, res) =>
        //Req petición request este tiene la peticion y el res es la respuesta que yo estoy construyendo
        placeCtrl.getAll(req, res));

    router.post('/', (req, res) =>
        placeCtrl.createPlace(req, res));

    router.get('/:id', (req, res) =>
        placeCtrl.getById(req, res));

    router.delete('/:id', (req, res) =>
        placeCtrl.deleteById(req, res));
    return router;
};