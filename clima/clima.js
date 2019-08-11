const axios = require ('axios');
const {apiKey} = require('../environment/environment');

const getClima = async (lat, lon) => {
  const instance = axios.create({
    baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?lon=${lon}&lat=${lat}&units=metric`,
    timeout: 5000,
    headers: {'x-rapidapi-key': apiKey}
  });
    
  resp = await instance.get()
  return resp.data.main.temp
}

module.exports = { getClima }