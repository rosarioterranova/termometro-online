const path = require("path")
const express = require("express")
const hbs = require("hbs")
const weatherRequest = require("./utils/weatherRequest")

const app = express()

app.set("view engine","hbs") // set the render engine
app.set("views", path.join(__dirname, "../views")); //set the view folder
hbs.registerPartials(path.join(__dirname, "../views/partials")); //set the partials folder
app.use(express.static(path.join(__dirname, "../public"))) //set the public folder

// index
app.get("/", (req, res) => {
    res.render("index", {
        title: "Termometro Online",
    })
})

// about
app.get("/about", (req, res) => {
    res.render("about", {
        title: "Info"
    })
})

// help
app.get("/help", (req, res) => {
    res.render("help", {
        title: "Aiuto"
    })
})

// weather (sending an object will send a JSON)
app.get("/weather", (req, res) => {
    if(!req.query.address){
        return res.send({ error: "Nessuna città inserita" })
    }

    weatherRequest.getWeather(req.query.address, (error, data) => {
        if(error){
            res.send({ error: error })
        } else {
            res.send({
                address: data.location.name,
                temperature: data.current.temperature
            })
        }
    })
})

// 404
app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        message: "Pagina non trovata!"
    })
})

app.listen(3000, () => {
    console.log("Server is running.")
})