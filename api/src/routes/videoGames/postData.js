const axios = require('axios')
require("dotenv").config();
const {API_KEY} = process.env
const {Videogame, Genre} = require('../../db')
const url =  `https://api.rawg.io/api/games`
const postDataVideoGames = async (req, res) => {
    let { name, description, released, rating, platforms, image, genres } = req.body;

    if(!name, description , released, rating , platforms , image, genres) return res.status(400).send(`Some data is missing!`);

    name = name.trim()
    description = description.trim()
    image = image.trim()

    try {
        const obj = { name,
                      description,
                      released,
                      rating, 
                      platforms, 
                      image 
                    }

        const newVideoGame = await Videogame.create(obj);
        newVideoGame.addGenres(genres);

        return res.status(200).send(`${name} videogame create successfully!`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    postDataVideoGames
}