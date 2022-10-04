const axios = require('axios')
require("dotenv").config();
const {API_KEY} = process.env
const {Videogame, Genre} = require('../../db')
const url =  `https://api.rawg.io/api/games`

const postDataVideoGames = async (req, res) => {
    try {
        let { name, description, released, rating, platform, image, genre, createInDb } = req.body;
        const validator =
        name && description && released && rating && platform && image ? true: false
        if (!validator) return res.status(400).send(`Some data is missing!`);
        name = name.trim()
        description = description.trim()
        image = image.trim()
        
        createInDb = true

        const obj = { name,
                      description,
                      released,
                      rating, 
                      platform, 
                      image,
                      createInDb
                    }

        const newVg = await Videogame.create(obj)
        const vg_genre = await Genre.findAll({
            where:{name : genre}
        })
        newVg.addGenres(vg_genre)

        console.log(newVg)
        console.log(vg_genre)

        return res.status(201).send(`${name} videogame create successfully!`);
    } catch (error) {
        console.log(error)
        return res.status(404).json({msg: error})
    }
}

module.exports = {
    postDataVideoGames
}