 <!-- Declare a module -->
var Clicker = angular.module('Clicker', []).run(function() {
    FastClick.attach(document.body);
});

<!--Routing-->
Clicker.config(function ($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"app/partials/play.html",
        controller:"playCtrl"
    }).when("/theme",{
        templateUrl:"app/partials/theme.html",
        controller:"themeCtrl"
    }).when("/game",{
        templateUrl:"app/partials/game.html",
        controller:"gameCtrl"
    }).otherwise({
        redirectTo:"/"
    })
});

