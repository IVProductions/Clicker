function indexCtrl($scope){

	$scope.totalClicks = 0;

	$scope.health = 250;
	$scope.currentHealth = 250;

	$scope.damage = 30;

	var percentage = 0;

	$scope.click = function (){
		$scope.totalClicks++;
		$scope.currentHealth = $scope.currentHealth - $scope.damage;
		if ($scope.currentHealth <= 0) {
			$scope.currentHealth = $scope.health;
		}
		percentage = ($scope.currentHealth/$scope.health)*100;
		$('.progressbar-cover').css('bottom' , percentage + '%');  // the cover controls the bar height
	}
}
