// API FROM WEATHERSTACK    http://api.weatherstack.com/

const fetch = require('node-fetch');

const REQUEST_URL = "http://api.weatherstack.com/current"
const ACCESS_KEY = "c1c003d65ec1209501969e90e3eba69d"

const getWeather = async (location) => {
    try {
        const response = await fetch(`${REQUEST_URL}?access_key=${ACCESS_KEY}&query=${encodeURIComponent(location)}`)
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}

module.exports = getWeather
