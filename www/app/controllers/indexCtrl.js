function indexCtrl($scope, records){

	$('.prevValid').css('background-image', 'none');
	$('.nextValid').css('background-image', 'none');

	$scope.upgrade = false;

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
	$scope.index = 0;
	var max = records.superheroes.length - 1;
	var figure = records.superheroes[$scope.index];

	var health = figure.health;
	var armour = figure.armour;
	var reward = figure.reward;
	var name = figure.name;
	var currentHealth = health;
	var imageUrl = figure.imageURL;

	var updatePicture = function () {
		$scope.health = health;
		$scope.armour = armour;
		$scope.reward = reward;
		$scope.name = name;
		$('.picture').css('background-image', 'url(' + imageUrl + ')');
	};

	// Initialize damage
	var damage = totalPower - armour;

	var percentage = 100;
	$('.progressbar-cover').css('bottom' , percentage + '%');  // the cover controls the bar height

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
				// DEFEATED CHAMPION
				figure.defeated = true;
				if($scope.index == max){
					alert("Du har runnet spillet, helsa mormor!");
				}
				if($scope.index != max){
					$('.nextValid').css('background-image', 'url(img/components/nextBtn.png)');
				}
			}
			percentage = (currentHealth/health)*100;
			
			if(percentage <= 5){
				$('.progress-cover').css("background-color","#f63a0f");
			}
			else if (percentage <= 25){
				$('.progress-cover').css("background-color","#f27011");
			}
			else if (percentage <= 50){
				$('.progress-cover').css("background-color","#f2b01e");
			}
			else if (percentage <= 75){
				$('.progress-cover').css("background-color","#f2d31b");
			}
			else {
				$('.progress-cover').css("background-color","#86e01e");
			}
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
		if ($scope.index != 0) {
			$scope.index--;
			figure = records.superheroes[$scope.index];
			health = figure.health;
			armour = figure.armour;
			reward = figure.reward;
			name = figure.name;
			imageUrl = figure.imageURL;
			currentHealth = health;

			updatePicture();
			updateStats();

			if(damage < 0){
				damage = 0;
			}	

			percentage = (currentHealth/health)*100;
			$('.progressbar-cover').css('bottom' , percentage + '%');  // the cover controls the bar height
		}
		if ($scope.index == 0){
			$('.prevValid').css('background-image', 'none');
			$('.nextValid').css('background-image', 'url(img/components/nextBtn.png)');
		}
		else {
			$('.nextValid').css('background-image', 'url(img/components/nextBtn.png)');
		}

	}

	$scope.next = function () {
		if ($scope.index != max) {
			$scope.index++;
			figure = records.superheroes[$scope.index];
			health = figure.health;
			armour = figure.armour;
			reward = figure.reward;
			name = figure.name;	
			imageUrl = figure.imageURL;
			currentHealth = health;

			updatePicture();
			updateStats();

			if(damage < 0){
				damage = 0;
			}

			percentage = (currentHealth/health)*100;
			$('.progressbar-cover').css('bottom' , percentage + '%');  // the cover controls the bar height

			$('.prevValid').css('background-image', 'url(img/components/prevBtn.png)');
			if(!figure.defeated){
				$('.nextValid').css('background-image', 'none');
			}
		}
		else {
			$('.nextValid').css('background-image', 'url(img/components/nextBtn.png)');
		}
	}

	// Upgrades
	var upgMultiplierCostArray = [400,2200,6160,12936,20698,31046,45017,62124,83246,109885];
	var upgMultiplierLevel = 0;
	var upgMultiplierCost = upgMultiplierCostArray[upgMultiplierLevel]; 
	$scope.upgMultiplierCost = upgMultiplierCost;
	$scope.upgMultiplierLevel = upgMultiplierLevel;

	$scope.upgMultiplierFunction = function() {
		
		if(gold >= upgMultiplierCost){
			gold = gold - upgMultiplierCost;
			upgMultiplierLevel++;
			upgMultiplier = upgMultiplier + 0.03;
			upgMultiplierCost = upgMultiplierCostArray[upgMultiplierLevel]; 
			$scope.upgMultiplierCost = upgMultiplierCost;
			$scope.upgMultiplierLevel = upgMultiplierLevel;

			updateStats();	
		}
		else {
			alert("not enough gold / max level reached");
		}
		
	}




}
