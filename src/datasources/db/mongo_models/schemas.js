const {Schema} = require('mongoose');

const songDetailDefinition = {
    songId: string,
    title: string,
    duration: string,
    releaseDate: string,
    author: string
}

const songsDetailSchema = new Schema(songDetailDefinition);

const clientDefinition = {
    accountNumber: {
        type: string,
        required: true
    },
    firstName: string,
    lastName: string,
    nickName: string,
    accountType: string,
    balance: string,
    contactInfo: {
        phone: string,
        email: string,
        address: {
            suitNum: string,
            street: string,
            city: string,
            country: string,
            postalCode: string,
            stateProv: string,
        }
    },
    followedSongs:[songsDetailSchema]
}

module.exports.clientSchema = new Schema(clientDefinition);