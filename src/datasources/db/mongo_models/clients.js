const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const {collections} = require('../../../shared/constants');
const clientSchema = require('./schemas').clientSchema;

module.exports = (connection = null) => {
    let model;
    if (connection) {
        model = connection.model('clients', clientSchema, collections.clients);
    }else{
        model = mongoose.model('clients', clientSchema, collections.clients);
    }

    //add complex client query here

    return model;
}