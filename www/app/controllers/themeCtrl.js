function themeCtrl($scope, $location, statsRecords, records){

	$scope.stats = statsRecords.stats;
	if(window.localStorage.getItem("stats") != null){
        $scope.stats = JSON.parse(window.localStorage.getItem("stats"));
    };

    $scope.enemies = records.enemies;
	if(window.localStorage.getItem("enemies") != null){
        $scope.enemies = JSON.parse(window.localStorage.getItem("enemies"));
    };

	$scope.play = function(theme){
        if(theme == 'superheroes'){
        	window.localStorage.setItem("theme",0);
        	$location.path('game');
        }
        else if (theme == 'supervillains'){
        	window.localStorage.setItem("theme",1);
        	$location.path('game');	
        }
        else if (theme == 'southpark'){
        	window.localStorage.setItem("theme",2);
        	$location.path('game');	
        }
    }
}