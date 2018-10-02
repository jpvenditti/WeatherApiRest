const axios = require('axios'); // declarar axios

const getClima = async(lat, lng) => {
  let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5310e24e4072700639199299cf0460b8`);

  return {
    location: response.data.name,
    temp : response.data.main.temp,
    hum : response.data.main.humidity,
    prss : response.data.main.pressure
  }
}

module.export = {
  getClima
}
