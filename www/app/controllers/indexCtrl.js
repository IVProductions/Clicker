function indexCtrl($scope, records){

	// Initialize Stats 
	var gold = 0;
	var gems = 0;
	var totalClicks = 0;
	var hitMultiplier = 1.0;
	var upgMultiplier = 1.0;
	var nameMultiplier = 1.0;
	var basePower = 10.0;
	var totalPower = hitMultiplier*upgMultiplier*nameMultiplier*basePower;

	var updateStats = function () {
		totalPower = hitMultiplier*upgMultiplier*nameMultiplier*basePower;
		damage = totalPower - armour;
		if(damage < 0){
			damage = 0;
		};

		// Round decimals
		hitMultiplier = Math.round(hitMultiplier*1000)/1000;
		nameMultiplier = Math.round(nameMultiplier*100)/100;
		basePower = Math.round(basePower);
		totalPower = Math.round(totalPower);
		damage = Math.round(damage);

		$scope.gold = gold;
		$scope.gems = gems;
		$scope.totalClicks = totalClicks;
		$scope.hitMultiplier = hitMultiplier;
		$scope.upgMultiplier = upgMultiplier;
		$scope.nameMultiplier = nameMultiplier;
		$scope.basePower = basePower;
		$scope.totalPower = totalPower;	
		$scope.damage = damage;


	};

	// Initialize Picture
	var index = 0;
	var max = records.superheroes.length - 1;
	var figure = records.superheroes[index];

	var health = figure.health;
	var armour = figure.armour;
	var reward = figure.reward;
	var name = figure.name;
	var currentHealth = health;

	var updatePicture = function () {
		$scope.health = health;
		$scope.armour = armour;
		$scope.reward = reward;
		$scope.name = name;
	};

	// Initialize damage
	var damage = totalPower - armour;

	var percentage = 0;

	updateStats();
	updatePicture();

	$scope.click = function () {
		// ADD TOTAL CLICKS
		totalClicks++;
		// HIT MULTIPLIER
		hitMultiplier = (1 + ((totalClicks/20)*0.001));
		
		// DECREASE HEALTH
		if(damage != 0){
			currentHealth = currentHealth - damage;
			if (currentHealth <= 0) {
				// INCREASE GOLD
				gold = gold + reward;
				// RESET HEALTH
				currentHealth = health;
			}
			percentage = (currentHealth/health)*100;
			$('.progressbar-cover').css('bottom' , percentage + '%');  // the cover controls the bar height
		}

		updateStats();
	}

	$scope.check = function () {
		var x = $scope.guessedName.toString();
		var xx = x.toLowerCase();
		var y = $scope.name;
		var yy = y.toLowerCase();

		if(xx == yy) {
			nameMultiplier = nameMultiplier + 0.05;
			updateStats();
		}
	}

	$scope.prev = function () {
		if (index != 0) {
			index--;
			figure = records.superheroes[index];
			health = figure.health;
			armour = figure.armour;
			reward = figure.reward;
			name = figure.name;
			currentHealth = health;
			updatePicture();
			updateStats();

			if(damage < 0){
				damage = 0;
			}	

			percentage = (currentHealth/health)*100;
			$('.progressbar-cover').css('bottom' , percentage + '%');  // the cover controls the bar height
		}
	}

	$scope.next = function () {
		if (index != max) {
			index++;
			figure = records.superheroes[index];
			health = figure.health;
			armour = figure.armour;
			reward = figure.reward;
			name = figure.name;	
			currentHealth = health;

			updatePicture();
			updateStats();

			if(damage < 0){
				damage = 0;
			}

			percentage = (currentHealth/health)*100;
			$('.progressbar-cover').css('bottom' , percentage + '%');  // the cover controls the bar height
		}

	}
}
