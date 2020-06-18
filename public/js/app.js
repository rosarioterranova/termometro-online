const termometro = angular.module('termometro', ["ngRoute"]) 

termometro.config(function($locationProvider, $routeProvider){ //add extra config in the angular app
    $locationProvider.hashPrefix(''); //remove the hash-bang
    $routeProvider

    .when("/", {
        templateUrl: "pages/main.html", //use this page when client click goes to /
        controller: "mainController" //use this controller on this page
    })

    .when("/about", {
        templateUrl: "pages/about.html",
        controller: "aboutController"
    })

    .when("/help", {
        templateUrl: "pages/help.html",
        controller: "helpController"
    })
})

termometro.controller('mainController', function($scope, $http) {
    const city_form = document.querySelector("form")
    const city_input = document.querySelector("#city")
    const spinner_anim = document.querySelector("#loading-spinner")
    const result_div = document.querySelector("#result")

    city_input.focus();
    
    $scope.getTemperature = () =>{
        result_div.classList.add("d-none")
        spinner_anim.classList.remove("d-none")
    
        //TODO: translate $scope.cityInput to english

        getWeather($scope.cityInput, $http, result_div, spinner_anim)
    }
})


termometro.controller('aboutController', function($scope) {
    
})

termometro.controller('helpController', function($scope) {
    
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
