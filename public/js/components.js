termometro.component("navBar", {
    templateUrl: "components/navBar.html"
})

termometro.component("temperatureQuery", {
    templateUrl: "components/temperatureQuery.html",
    controller: function($http){
        const city_input = document.querySelector("#city")
        const spinner_anim = document.querySelector("#loading-spinner")
        const result_div = document.querySelector("#result")

        city_input.focus();
        
        this.getTemperature = () =>{
            result_div.classList.add("d-none")
            spinner_anim.classList.remove("d-none")
            getWeather(this.cityInput, $http, result_div, spinner_anim)
        }
    }
})

function getWeather(location, http, result_div, spinner_anim){
    http.get("/weather?address="+location)
    .then((result) => {

        if(result.data.error)
            result_div.innerHTML = "<p class='my-5 error'>"+result.data.error+"</p>"
        if(result.data.temperature)
            result_div.innerHTML = "<p class='my-5 display-1'>"+result.data.temperature+"°</p>"
        
        result_div.classList.remove("d-none")
        spinner_anim.classList.add("d-none")
    })
    .catch((error) => {
        result_div.innerHTML = "<p class='my-5 error'>"+error+"</p>"
    })
}
