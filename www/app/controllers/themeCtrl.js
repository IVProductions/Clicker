function themeCtrl($scope, $location){
	$scope.play = function(theme){
        if(theme == 'superheroes'){
        	window.localStorage.setItem("theme",0);
        	$location.path('game');
        }
        else if (theme == 'supervillains'){
        	window.localStorage.setItem("theme",1);
        	$location.path('game');	
        }
    }
}