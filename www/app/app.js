 <!-- Declare a module -->
var Clicker = angular.module('Clicker', []);

<!--Routing-->
Clicker.config(function ($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"app/partials/index.html",
        controller:"indexCtrl"
    }).when("/next",{
            templateUrl:"app/partials/index.html",
            controller:"indexCtrl"
    }).otherwise({
        redirectTo:"/"
    })
});

