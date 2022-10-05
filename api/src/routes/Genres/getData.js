const axios = require("axios");
const { Genre } = require("../../db");
// require("dotenv").config();
const { API_KEY } = process.env;
const url = `https://api.rawg.io/api/genres`

const loadGenres = async (db = false) => {
    try {
        let genres = []

        const genresExist = await Genre.findAll()
    
        if(!genresExist.lenght){
            const api = await axios.get(`${url}?key=${API_KEY}`)
            genres = [...api.data.results]
    
    
          // FILTER INF
    
            genres = genres.map( genre => {
                const {id , name} = genre
    
                const obj = {
                    id,
                    name
                }
    
                return obj
            })
    
        }
    
        if (db && !genresExist.length) await Genre.bulkCreate(genres)
    
        return genres;
        
    } catch (error) {
        console.log(error)
    }
}


const getDataGenres = async (req, res) => {
    try {

        const genres = await loadGenres();
    
        // const genres = await Genre.findAll();
    
        console.log(`Genres length: ${genres.length}`);
    
        return res.status(200).send(genres);

    } catch (error) {
            return res.status(400).send(error);
        }
}

module.exports = {
    loadGenres,
    getDataGenres
}