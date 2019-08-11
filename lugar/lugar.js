const axios = require ('axios');
const {apiKey} = require('../environment/environment');

const encontrarLugarLatLong = async (direccion) => {

  let encodedDireccion = encodeURI (direccion);
  
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedDireccion}`,
    timeout: 5000,
    headers: {'x-rapidapi-key': apiKey}
  });
    
  resp = await instance.get()
  if (resp.data.Results.length === 0) {
    throw new Error (`No hay resultados para ${direccion}`)
  }
  let { name, lat, lon } = resp.data.Results[0];
  return {
    name,
    lat,
    lon
  }
}

module.exports = { encontrarLugarLatLong }
