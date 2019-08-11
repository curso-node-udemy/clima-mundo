const { argv } = require ('./config/yargs');
const lugar = require ('./lugar/lugar');
const clima = require ('./clima/clima');

// lugar.encontrarLugarLatLong(argv.direccion)
//   .then ( ubicacion => console.log(ubicacion))
//   .catch ( err => console.log(err))

// clima.clima(12, 12)
//   .then (data => console.log(data))
//   .catch (err => console.log(err));

let getInfo = async (direccion) => {
  try {
    let ubicacion = await lugar.encontrarLugarLatLong(direccion);
    let temperatura = await clima.getClima(ubicacion.lat, ubicacion.lon) ;
    return (`La temperatura de ${ubicacion.name} es de ${temperatura}ºC`);
  } catch (error) {
    throw new Error (`No se ha podido obtener el clima de ${direccion}`)
  }
};

getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log)