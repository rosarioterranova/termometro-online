// API FROM WEATHERSTACK    http://api.weatherstack.com/

const request = require("request")

const REQUEST_URL = "http://api.weatherstack.com/current"
const ACCESS_KEY = "c1c003d65ec1209501969e90e3eba69d"

const getWeather = (location, callback) => {
    const url = `${REQUEST_URL}?access_key=${ACCESS_KEY}&query=${encodeURIComponent(location)}`
    request({ url: url, json: true }, (error, response) => {
        if(error){
            callback("Errore nella richiesta: "+ error, undefined) //return values
        } else if(response.body.error){
            callback("Location non trovata", undefined) //return values
        } else {
            callback(undefined, response.body)
        }
    })
}

module.exports = { getWeather: getWeather }