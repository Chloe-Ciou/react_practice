const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const database = require('../../shared/constants');

mongoose.start = start = async () => {
    await mongoose.connect(database['mongo']);
    console.log(`connect to database ${database['mongo']}`)
}

mongoose.close = close = async () => {
    await mongoose.connection.close();
}

module.exports = mongoose;