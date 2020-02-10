const mongoose = require('mongoose');

const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        unique: false
    },
    githubUser: {
        required: true,
        type: String, 
        unique: true
    },
    bio: {
        required: false,
        type: String,
        unique: false
    },
    avatar_url: {
        required: true,
        type: String,
        unique: true
    },
    techs: [String],
    location:{
        type: PointSchema,
        index: "2dsphere",
    }
});

module.exports = mongoose.model('Dev', DevSchema);