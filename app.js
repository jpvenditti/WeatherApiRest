const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const axios = require('axios');

const argv = require('yargs').options({
  direccion:{
    alias: 'd',
    desc: 'Direccion de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

let getInfo = async(direccion) => {

  try {
    let coors = await lugar.getLugarLatLng(direccion);
    let tempResponse = await clima.getClima(coors.lat, coors.lng);

    return tempResponse;
  }
  catch (e) {
    return 'No se pudo determinar el clima en ciudad requerida.';
  }
}

getInfo(argv.direccion)
  .then(mensaje => console.log(mensaje))
  .catch(e => console.log(e))
