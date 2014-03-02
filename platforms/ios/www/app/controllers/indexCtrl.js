function indexCtrl($scope, records){


	$scope.gold = 0;
	$scope.gems = 0;
	$scope.totalClicks = 0;
	$scope.hitMultiplier = 1.0;
	$scope.upgMultiplier = 1.0;
	$scope.nameMultiplier = 1.0;
	$scope.basePower = 10.0;
	$scope.totalPower = $scope.hitMultiplier * $scope.upgMultiplier * $scope.nameMultiplier * $scope.basePower;

	// GET PICTURE
	var index = 0;
	var max = records.superheroes.length - 1;
	var figure = records.superheroes[index];
	$scope.health = figure.health;
	$scope.armour = figure.armour;
	$scope.reward = figure.reward;
	$scope.name = figure.name;
	$scope.currentHealth = $scope.health;

	$scope.damage = $scope.totalPower - $scope.armour;

	var percentage = 0;

	$scope.click = function () {
		// ADD TOTAL CLICKS
		$scope.totalClicks++;
		// HIT MULTIPLIER
		$scope.hitMultiplier = $scope.hitMultiplier + ($scope.totalClicks/20)*0.001;

		// DECREASE HEALTH
		if($scope.damage != 0){
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

		$scope.update();
	}

	$scope.update = function () {
		$scope.totalPower = $scope.hitMultiplier*$scope.upgMultiplier*$scope.nameMultiplier*$scope.basePower;
		$scope.damage = $scope.totalPower - $scope.armour;
		if($scope.damage < 0){
			$scope.damage = 0;
		}
	}

	$scope.check = function () {
		var x = $scope.guessedName.toString();
		console.log(x);
		var xx = x.toLowerCase();
		var y = $scope.name;
		var yy = y.toLowerCase();

		if(xx == yy) {
			$scope.nameMultiplier = $scope.nameMultiplier + 0.05;
			$scope.update();
		}
	}

	$scope.prev = function () {
		if (index != 0) {
			index--;
			figure = records.superheroes[index];
			$scope.health = figure.health;
			$scope.armour = figure.armour;
			$scope.reward = figure.reward;
			$scope.name = figure.name;
			$scope.currentHealth = $scope.health;
			$scope.update();

			if($scope.damage < 0){
				$scope.damage = 0;
			}	

			percentage = ($scope.currentHealth/$scope.health)*100;
			$('.progressbar-cover').css('bottom' , percentage + '%');  // the cover controls the bar height
		}
	}

	$scope.next = function () {
		if (index != max) {
			index++;
			figure = records.superheroes[index];
			$scope.health = figure.health;
			$scope.armour = figure.armour;
			$scope.reward = figure.reward;
			$scope.name = figure.name;	
			$scope.currentHealth = $scope.health;
			$scope.update();

			if($scope.damage < 0){
				$scope.damage = 0;
			}

			percentage = ($scope.currentHealth/$scope.health)*100;
			$('.progressbar-cover').css('bottom' , percentage + '%');  // the cover controls the bar height
		}

	}
}
