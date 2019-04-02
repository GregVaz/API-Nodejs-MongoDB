const handler = require('../utils/handler');

let _place;

const getAll = (req, res) => {
    _place.find({}, (error, place) => {
        if (error) {
            res.status(400);
            return res.json({
                msg: 'No se pudo completar, intenta de nuevo'
            });
        }

        res.status(200);
        res.json(place);
    })

};

const createPlace = (req, res) => {
    const place = req.body;

    _place.create(place)
        .then(
            (data) => {
                res.status(200);
                res.json({ msg: "Lugar creado correctamente", data: data });
            }
        )
        .catch(
            (err) => {
                res.status(400);
                res.json({ msg: "Algo va mal!!!", data: err });
            }
        )
};

const getById = (req, res) => {
    const { id } = req.params;

    if (id.toString().length != 24) {
        res.status(400);
        res.json({ err: "Identificador inválido" });
    } else {
        _place.find({ _id: id })
            .sort({})
            .exec(handler.handleOne.bind(null, 'place', res));
    }
};

const deleteById = (req, res) => {
    const id = req.params.id;

    _place.remove({ _id: id }, (err, data) => {
        if (err) {
            res.status(400);
            res.json({ msg: "No se pudo realizar la operación, intente nuevamente" });
        } else {
            res.status(200);
            res.json({ msg: "El usuario se eliminó correctamente" });
        }
    });
    //const {id} = req.params;
};

module.exports = (Place) => {
    _place = Place;
    return ({
        getAll,
        createPlace,
        getById,
        deleteById
    });
};
