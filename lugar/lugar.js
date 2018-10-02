const axios = require('axios'); // declarar axios

const getLugarLatLng = async(direccion) => {
  let encodedUrl = encodeURI(argv.direccion) // encodeURI se utiliza para escapar a los espacios de la direccion
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}+CA&key=AIzaSyD5Z9NYEynycmMZ5HajTr45VU88J-rEzG0`);


          let location = resp.data.results[0];
          let coors = location.geometry.location;

          console.log('Direccion:', location.formatted_address);
          console.log('lat',coors.lat);
          console.log('lng',coors.lng);

          return{
              direccion : localation.formatted_address,
              lat : coords.lat,
              lng : coords.lng
          }
}

module.exports = {
  getLugarLatLng
}
