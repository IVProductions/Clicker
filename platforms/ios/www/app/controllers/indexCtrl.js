function indexCtrl($scope){


	$scope.gold = 0;
	$scope.gems = 0;
	$scope.totalClicks = 0;
	$scope.damage = 30;
	$scope.hitMultiplier = 1.0;
	$scope.upgMultiplier = 1.0;
	$scope.nameMultiplier = 1.0;
	$scope.basePower = 10;
	$scope.totalPower = 10;

	// SUPERMAN
	$scope.health = 250;
	$scope.armour = 20;
	$scope.reward = 80;

	$scope.currentHealth = $scope.health;

	var percentage = 0;

	$scope.click = function (){
		// ADD TOTAL CLICKS
		$scope.totalClicks++;

		// DECREASE HEALTH
		$scope.currentHealth = $scope.currentHealth - $scope.damage;
		if ($scope.currentHealth <= 0) {
			// INCREASE GOLD
			$scope.gold = $scope.gold + $scope.reward;
			// RESET HEALTH
			$scope.currentHealth = $scope.health;
		}
		percentage = ($scope.currentHealth/$scope.health)*100;
		$('.progressbar-cover').css('bottom' , percentage + '%');  // the cover controls the bar height
	}
}
