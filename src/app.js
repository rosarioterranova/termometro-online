const path = require("path")
const express = require("express")
const getWeather = require("./utils/weatherRequest")
const translate = require('translate-google')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, "../public")))

app.get("/", (req, res) => {
    res.send("index")
})

app.get("/weather", async (req, res) => {
    if(!req.query.address){
        return res.send({ error: "Nessuna città inserita" })
    }
    const cityName =  await translate(req.query.address, {from: 'it', to: 'en'})
    const result = await getWeather(cityName)
    if(result.current){
        res.send({
            address: result.location.name,
            temperature: result.current.temperature
        })
    } else {
        res.send({ error: result })
    }
})

app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        message: "Pagina non trovata!"
    })
})

app.listen(port, () => {
    console.log("Server is running on port " + port)
})