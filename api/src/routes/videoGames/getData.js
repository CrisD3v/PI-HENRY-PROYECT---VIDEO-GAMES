const axios = require('axios')
require("dotenv").config();
const {API_KEY} = process.env
const {Videogame, Genre} = require('../../db')
const url =  `https://api.rawg.io/api/games`


// GET DATA API RAW
const getDataApi = async (req, res) => {
    let videoGames
    let quantity = 100
    try {
        let api = await axios.get(`${url}?key=${API_KEY}`)
        videoGames = [...api.data.results]
    
        if(quantity > 20){
            let auxApi = api

            for (let i = 0; videoGames.length < quantity; i++) {
                
                let apiV2 = await axios.get(auxApi.data.next)
                auxApi = apiV2

                if(quantity - videoGames.length < 20){
                    videoGames = [
                        ...videoGames,
                        ...apiV2.data.results.slice(0,residue)
                    ]
                    break
                }

                videoGames = [...videoGames, ...apiV2.data.results]
            }
        }
        
        videoGames = videoGames.map((mapper) => {
            const {
              id,
              name,
              genres,
              rating,
              platforms,
              background_image: image,
            } = mapper;
            const obj = {
              id,
              name,
              genres: genres ? genres.map((g) => g.name) : null,
              rating,
              platforms: platforms ? platforms.map((p) => p.platform.name) : null,
              image,
            };
      
            return obj;
          });
        
        
          console.log(videoGames.length)
        return videoGames
    } catch (error) {
        throw new Error(`Error getting characters from API: ${error}`);
    }
}

//GET DATA OF DATABASE
const getDataDB = async (req, res) => {
    try {
        let videogamesDb = await Videogame.findAll({
            include: {
                model: Genre,
                attributes: ["name"],
                through: { attributes: [] },
            },
            });
        
        return videogamesDb;
    } catch (error) {
        console.log(error)
    }
}

//GET ALL DATA
const getAllData = async (req, res) => {
    const apiVideoGames = await getDataApi();
    const dbVideoGames = await getDataDB();

    const allVideoGames = [...apiVideoGames, ...dbVideoGames]

    return res.send(allVideoGames)
}

//GET DATA BY ID
const getDataApiById = async (idGames) =>{
    try {
        let videoGames = await axios.get(`${url}/${idGames}?key=${API_KEY}`)
        if(!videoGames) return `Game with id : ${Id} Not Found `

        const{
            id,
            name,
            background_image: image, 
            rating,
            genres,
            description_raw: description,
            released,
            platforms
        } = videoGames.data

  

        const objVideogame = {
            id,
            name,
            image,
            rating,
            genres: genres.map((g) => g.name),
            description,
            released,
            platforms: platforms ? platforms.map((p) => p.platform.name) : null,
          };
          
          return objVideogame;
        
    } catch (error) {
        console.log(`An Error ocurred, ${error}`);
        return ["Error"];
    }
}

//GET ALL DATA BY ID
const getDataById = async (req, res) => {
    const { idGames } = req.params
    try {
        if(idGames){
            const dbVideoGames = await getDataDB();
            const videoGamesFoundDb = dbVideoGames.find(
                game => game.id === idGames
            )

            if (videoGamesFoundDb) return res.status(200).send(videoGamesFoundDb);

            const videoGamesFoundApi = await getDataApiById(idGames);
            return res.status(200).send(videoGamesFoundApi);
        }
    } catch (error) {
        return res.status(404).send(error);
    }
}

module.exports = {
    getDataApi,
    getDataDB,
    getAllData,
    getDataById
}