const mongoose = require('mongoose');
const _ = require('underscore');

module.exports = (wagner) => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/api', {useUnifiedTopology: true, useNewUrlParser: true});

    wagner.factory('db', () => mongoose);
    const User = require('./user.model');
    const Place = require('./places.model');

    const models = {
        User,
        Place
    };

    _.each(models, (v, k) => {
        wagner.factory(k, () => v);
    });
    //Utiliza las variables de models de forma global para que cualquier archivo pueda verlo.
}
