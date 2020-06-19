const termometro = angular.module('termometro', ["ngRoute"]) 

termometro.config(function($locationProvider, $routeProvider){ //add extra config in the angular app
    $locationProvider.hashPrefix(''); //remove the hash-bang
    $routeProvider

    .when("/", {
        templateUrl: "pages/main.html" //use this page when client click goes to /
    })

    .when("/about", {
        templateUrl: "pages/about.html"
    })

    .when("/help", {
        templateUrl: "pages/help.html"
    })
})
