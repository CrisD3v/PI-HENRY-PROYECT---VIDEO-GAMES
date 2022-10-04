const axios = require("axios");
const { Platform } = require("../../db");
// require("dotenv").config();
const { API_KEY } = process.env;
const url = `https://api.rawg.io/api/platforms/lists/parents`

const getDataPlatforms = async (req, res) => {
    try {

        const  apiresult = await axios.get(`${url}?key=${API_KEY}`)
        let apivgplat = apiresult.data.results.map(p => p.name)
    
        return res.status(200).send(apivgplat);
    
      } catch (error) {
          return res.status(400).send(error);
      }
}

module.exports = {
    getDataPlatforms
}