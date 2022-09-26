const axios = require("axios");
const { Platform } = require("../../db");
// require("dotenv").config();
const { API_KEY } = process.env;
const url = `https://api.rawg.io/api/platforms`

const loadPlatforms = async (db = false) => {
    let platforms = [];
  
    const platformsExist = await Platform.findAll();
  
    if (!platformsExist.length) {
        const api = await axios(`${url}?key=${API_KEY}`);
  
        platforms = [...api.data.results];
  
      // FILTER INF

        platforms = platforms.map((platform) => {
        const { id, name } = platform;
        const obj = {
          id,
          name,
        }
  
        return obj

      })
    }
  
    if (db && !platformsExist.length) await Platform.bulkCreate(platforms);
  
    return platforms;
}

const getDataPlatforms = async (req, res) => {
    try {
      // const platforms = await loadPlatforms();
  
      const platforms = await Platform.findAll();
  
      // console.log(`Platforms length: ${platforms.length}`);
  
      return res.status(200).send(platforms);

    } catch (error) {
        return res.status(400).send(error);
    }
}

module.exports = {
    loadPlatforms,
    getDataPlatforms
}