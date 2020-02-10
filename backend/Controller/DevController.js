const Dev = require('../Model/Dev');

const parseStringArray = require('../utils/parseStringArray')

const axios = require('axios');

module.exports = {
    async store(req,res){
        const {githubUser, techs, latitude, longitude} = req.body;
        let dev = await Dev.findOne({githubUser});
        
        if(dev){
            return res.send("erro ao cadastrar")
        }
        
        const techArray = parseStringArray(techs)
        
        const gitResponse = await axios.get(`https://api.github.com/users/${githubUser}`);
        
        let {name = login, avatar_url, bio} = gitResponse.data

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }

        dev = await Dev.create({
            name,
            githubUser,
            bio,
            avatar_url,
            techs: techArray,
            location
        })

        res.json(dev)
    },

    async index(req,res){
        const devs = await Dev.find();

        return res.send(devs);
    }
}