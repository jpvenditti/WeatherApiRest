const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const axios = require('axios');
var firebase = require('firebase');

//Firebase refs

var climaRef = ref.child("clima");
var newClimaRef = climaRef.push();

//end Firebase refs

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

    newClimaRef.set({
      lat: coors.lat,
      lng: coors.lng,
      hum: tempResponse.hum,
      location: tempResponse.location,
      pres: tempResponse.pres,
      temp: tempResponse.temp
    });

    return tempResponse;
  }
  catch (e) {
    return 'No se pudo determinar el clima en ciudad requerida.';
  }
}

getInfo(argv.direccion)
  .then(mensaje => console.log(mensaje))
  .catch(e => console.log(e))

firebase.initializeApp({
  apiKey: "AIzaSyDZ52_jbXx01bMGFd5MAGk9YP20MtLXXbU",
  authDomain: "weatherrestapi-cad69.firebaseapp.com",
  databaseURL: "https://weatherrestapi-cad69.firebaseio.com",
  projectId: "weatherrestapi-cad69",
  storageBucket: "weatherrestapi-cad69.appspot.com",
  messagingSenderId: "482307349979"
});
