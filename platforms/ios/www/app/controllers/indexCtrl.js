function indexCtrl($scope){

	$scope.totalClicks = 0;

	$scope.click = function (){
		$scope.totalClicks++;
	}
}
