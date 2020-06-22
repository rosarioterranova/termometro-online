const termometro = angular.module('termometro', ["ngRoute", "navBar", "temperatureQuery"]) 

termometro.config(function($locationProvider, $routeProvider){
    $locationProvider.hashPrefix(''); //remove the hash-bang
    $routeProvider

    .when("/", {
        templateUrl: "pages/main.html"
    })

    .when("/about", {
        templateUrl: "pages/about.html"
    })

    .when("/help", {
        templateUrl: "pages/help.html"
    })
})
