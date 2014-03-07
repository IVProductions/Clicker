function gameCtrl($scope, records, statsRecords){

	var prevValid = false;
	var nextValid = false;
	$('.prevValid').css('background-image', 'none');
	$('.nextValid').css('background-image', 'none');

	$scope.upgrade = false;
	$scope.upgrades = false;

	var themeIndex = window.localStorage.getItem("theme");
	var stats = statsRecords.stats;
	if(window.localStorage.getItem("stats") != null){
        stats = JSON.parse(window.localStorage.getItem("stats"));
    };

    console.log(stats);

    var currentStats = stats[themeIndex];

	var enemies = records.enemies;
	if(window.localStorage.getItem("enemies") != null){
        enemies = JSON.parse(window.localStorage.getItem("enemies"));
    };

    var currentEnemies = enemies[themeIndex];

	// Initialize Stats 
	// ****** GOLD ******* //
	var gold = parseInt(currentStats.gold);
	// ****** GEM ******* //
	var gems = parseInt(currentStats.gems);
	// ****** TOTAL CLICKS ******* //
	var totalClicks = parseInt(currentStats.totalClicks);
	// ****** HIT MULTIPLIER ******* //
	var hitMultiplier = parseFloat(currentStats.hitMultiplier);
	// ****** NAME MULTIPLIER ******* //
	var nameMultiplier = parseFloat(currentStats.nameMultiplier);
	// ****** UPG MULTIPLIER ******* //
	var upgMultiplier = parseFloat(currentStats.upgMultiplier);
	var nextUpgMultiplier = upgMultiplier + 0.03;
	// ****** BASEPOWER ******* //
	var basePower = parseInt(currentStats.basePower);
	// ****** TOTAL POWER ******* //
	var totalPower = hitMultiplier*upgMultiplier*nameMultiplier*basePower;
	// ****** CRIT ******* //
	var crit = parseFloat(currentStats.crit);
	var nextCrit = crit + 0.05;
	// ****** CRITCHANCE ******* //
	var critChance = parseFloat(currentStats.critChance);
	var nextCritChance = critChance + 0.005;
	// ****** GEMCHANCE ******* //
	var gemChance = parseFloat(currentStats.gemChance);
	var nextGemChance = gemChance + 0.004;
	// ****** TRAINING EFFECT ******* //
	var trainingEffect = parseFloat(currentStats.trainingEffect);
	var nextTrainingEffect = trainingEffect + 0.05;

	var updateStats = function () {
		totalPower = hitMultiplier*upgMultiplier*nameMultiplier*basePower;
		damage = totalPower - armour;
		if(damage < 0){
			damage = 0;
		};

		// Round decimals
		hitMultiplier = Math.round(hitMultiplier*1000)/1000;
		nameMultiplier = Math.round(nameMultiplier*100)/100;
		upgMultiplier = Math.round(upgMultiplier*100)/100;
		nextUpgMultiplier = Math.round(nextUpgMultiplier*100)/100;
		basePower = Math.round(basePower);
		totalPower = Math.round(totalPower);
		damage = Math.round(damage);

		switch(parseInt(gold.toString().length)){
			case 4:
			  	$scope.gold = gold.toString().substring(0,1) + "'" + gold.toString().substring(1,4);
			  	break;
			case 5:
			  	$scope.gold = gold.toString().substring(0,2) + "'" + gold.toString().substring(2,5);
			  	break;
			case 6:
			  	$scope.gold = gold.toString().substring(0,3) + "'" + gold.toString().substring(3,6);
			  	break;
			case 7:
			  	$scope.gold = gold.toString().substring(0,1) + "." + gold.toString().substring(1,3) + " Million";
			  	break;
			case 8:
			  	$scope.gold = gold.toString().substring(0,2) + "." + gold.toString().substring(2,4) + " Million";
			  	break;
			case 9:
			  	$scope.gold = gold.toString().substring(0,3) + "." + gold.toString().substring(3,5) + " Million";
			  	break;
			case 10:
			  	$scope.gold = gold.toString().substring(0,1) + "." + gold.toString().substring(1,3) + " Billion";
			  	break;
			case 11:
			  	$scope.gold = gold.toString().substring(0,2) + "." + gold.toString().substring(2,4) + " Billion";
			  	break;
			case 12:
			  	$scope.gold = gold.toString().substring(0,3) + "." + gold.toString().substring(3,5) + " Billion";
			  	break;
			default:
		  		$scope.gold = gold;
		}

		$scope.gems = gems;
		$scope.totalClicks = totalClicks;
		$scope.hitMultiplier = hitMultiplier;
		$scope.upgMultiplier = upgMultiplier;
		$scope.nextUpgMultiplier = nextUpgMultiplier;
		$scope.nameMultiplier = nameMultiplier;
		$scope.basePower = basePower;
		$scope.totalPower = totalPower;	
		$scope.damage = damage;

		critChance = Math.round(critChance*1000)/1000;
		nextCritChance = Math.round(nextCritChance*1000)/1000;
		gemChance = Math.round(gemChance*1000)/1000;
		nextGemChance = Math.round(nextGemChance*1000)/1000;
		crit = Math.round(crit*100)/100;
		nextCrit = Math.round(nextCrit*100)/100;
		trainingEffect = Math.round(trainingEffect*100)/100;
		nextTrainingEffect = Math.round(nextTrainingEffect*100)/100;

		$scope.critChance = critChance;
		$scope.nextCritChance = nextCritChance;
		$scope.gemChance = gemChance;
		$scope.nextGemChance = nextGemChance;
		$scope.crit = crit;
		$scope.nextCrit = nextCrit;
		$scope.trainingEffect = trainingEffect;
		$scope.nextTrainingEffect = nextTrainingEffect;

		currentStats.gems = gems;
		currentStats.gold = gold;
		currentStats.totalClicks = totalClicks;
		currentStats.hitMultiplier = hitMultiplier;
		currentStats.upgMultiplier = upgMultiplier;
		currentStats.nameMultiplier = nameMultiplier;
		currentStats.basePower = basePower;
		currentStats.critChance = critChance;
		currentStats.crit = crit;
		currentStats.gemChance = gemChance;
		currentStats.trainingEffect = trainingEffect;
		currentStats.index = $scope.index;

		window.localStorage.setItem("enemies",JSON.stringify(enemies));
		window.localStorage.setItem("stats",JSON.stringify(stats));
	};

	// Initialize Picture
	$scope.index = currentStats.index;

	var max = currentEnemies.length - 1;
	var enemy = currentEnemies[$scope.index];

	var health = enemy.health;
	var armour = enemy.armour;
	var reward = enemy.reward;
	var name = enemy.name;
	var currentHealth = health;
	var imageUrl = enemy.imageURL;
    var defeated = enemy.defeated;
    var guessed = enemy.guessed;

	var updatePicture = function () {
		$scope.health = health;
		$scope.armour = armour;
		$scope.reward = reward;
		$scope.name = name;
		$('.picture').css('background-image', 'url(' + imageUrl + ')');
		if(guessed){
			$('.checkNameBtn').css('background-image', 'url(img/components/checkBtn.png)');
			$scope.guessedName = enemy.name;
			$(".allcaps").prop('disabled', true);	
		}
		else {
			$('.checkNameBtn').css('background-image', 'url(img/components/questionMark.png)');
			$scope.guessedName = "";
			$(".allcaps").prop('disabled', false);	
		}
		if(!defeated){
			$('.nextValid').css('background-image', 'none');
			nextValid = false;
		}
		else {
			$('.nextValid').css('background-image', 'url(img/components/nextBtn.png)');	
			nextValid = true;
		}
		if($scope.index != 0){
			$('.prevValid').css('background-image', 'url(img/components/prevBtn.png)');
			prevValid = true;	
		}
	};

	// Initialize damage
	var damage = totalPower - armour;

	var percentage = 100;
	$('.progressbar-cover').css('bottom' , percentage + '%');  // the cover controls the bar height

	updateStats();
	updatePicture();

	$scope.click = function (event) {
		// ADD TOTAL CLICKS
		totalClicks++;
		// HIT MULTIPLIER
		hitMultiplier = (1 + ((totalClicks/20)*0.001));
		// DECREASE HEALTH
		if(damage != 0){
			//CRIT CHANCE
			$(".crit").remove();
			var random1 = Math.random();
			if(random1 <= critChance){
				var r = random1.toString().substring(3,7);
				var $critAnim = $("<img>", {src: "img/components/crit.png", class: "critAnim"+r+" crit", height: "10", width: "10"});
				$critAnim.css('position', 'absolute');
				$critAnim.css('top', ''+(event.pageY-75)+'px');
				$critAnim.css('left', ''+(event.pageX-25)+'px');
				$(".main").append($critAnim);
				//$('.critAnim'+r).animate({percent: 200}, 500, function () {
				//	$('.critAnim'+r).remove();
				//});
				$('.critAnim'+r).effect("scale", {percent:1000, origin:['middle','center']}, 300, function () {
					$('.critAnim'+r).remove();
					$(".crit").remove();
				});
				currentHealth = currentHealth - (damage*crit);
			}
			else {
				currentHealth = currentHealth - damage;
			}
			if (currentHealth <= 0) {
				// INCREASE GOLD
				gold = gold + reward;
				// RESET HEALTH
				currentHealth = health;
				// DEFEATED CHAMPION
				enemy.defeated = true;
				// GEM CHANCE
				var random2 = Math.random();
				if(random2 <= gemChance){
					var r = random2.toString().substring(3,5);
					var $gemAnim = $("<img>", {src: "img/components/gem.png", class: "gemAnim"+r, height: "50", width: "50"});
					$gemAnim.css('position', 'absolute');
					$gemAnim.css('top', ''+(event.pageY)+'px');
					$gemAnim.css('left', ''+(event.pageX-25)+'px');
					$(".main").append($gemAnim);
					$('.gemAnim'+r).animate({top : '5%', left: '90%', height: '10', width: '10'}, 500, function () {
						$('.gemAnim'+r).remove();
					});
					gems++;
				}
				if($scope.index == max){
					alert("Du har runnet spillet, helsa mormor!");
				}
				if($scope.index != max){
					nextValid = true;
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
		if($scope.guessedName != null){
			var x = $scope.guessedName.toString();
			var xx = x.toLowerCase();
			var y = $scope.name;
			var yy = y.toLowerCase();

			if(xx == yy && !enemy.guessed) {
				enemy.guessed = true;
				nameMultiplier = nameMultiplier + 0.1;
				updateStats();
				$('.checkNameBtn').css('background-image', 'url(img/components/checkBtn.png)');
				$('.allcaps').prop('disabled', true);	
			}
		}
	}

	$scope.prev = function () {
		if(prevValid){
			if ($scope.index != 0) {
				$scope.index--;
				currentStats.index = $scope.index;
				window.localStorage.setItem("stats",JSON.stringify(stats));
				enemy = currentEnemies[$scope.index];
				health = enemy.health;
				armour = enemy.armour;
				reward = enemy.reward;
				name = enemy.name;
				imageUrl = enemy.imageURL;
				currentHealth = health;
				defeated = enemy.defeated;
				guessed = enemy.guessed;

				updatePicture();
				updateStats();

				if(damage < 0){
					damage = 0;
				}	

				percentage = (currentHealth/health)*100;
				$('.progressbar-cover').css('bottom' , percentage + '%');  // the cover controls the bar height

				if(enemy.guessed){
					$('.checkNameBtn').css('background-image', 'url(img/components/checkBtn.png)');
					$scope.guessedName = enemy.name;
					$(".allcaps").prop('disabled', true);	
				}
				else {
					$('.checkNameBtn').css('background-image', 'url(img/components/questionMark.png)');
					$scope.guessedName = "";
					$(".allcaps").prop('disabled', false);	
				}
			}
			if ($scope.index == 0){
				$('.prevValid').css('background-image', 'none');
				$('.nextValid').css('background-image', 'url(img/components/nextBtn.png)');
				nextValid = true;
				prevValid = false;
			}
			else {
				$('.nextValid').css('background-image', 'url(img/components/nextBtn.png)');
				nextValid = true;
			}
		}
	}

	$scope.next = function () {
		if(nextValid){
			if ($scope.index != max) {
				$scope.index++;
				currentStats.index = $scope.index;
				window.localStorage.setItem("stats",JSON.stringify(stats));
				enemy = currentEnemies[$scope.index];
				health = enemy.health;
				armour = enemy.armour;
				reward = enemy.reward;
				name = enemy.name;	
				imageUrl = enemy.imageURL;
				currentHealth = health;
				defeated = enemy.defeated;
				guessed = enemy.guessed;

				updatePicture();
				updateStats();

				if(damage < 0){
					damage = 0;
				}

				percentage = (currentHealth/health)*100;
				$('.progressbar-cover').css('bottom' , percentage + '%');  // the cover controls the bar height

				$('.prevValid').css('background-image', 'url(img/components/prevBtn.png)');
				prevValid = true;
				if(!defeated){
					$('.nextValid').css('background-image', 'none');
					nextValid = false;
				}

				if(guessed){
					$('.checkNameBtn').css('background-image', 'url(img/components/checkBtn.png)');
					$scope.guessedName = enemy.name;
					$(".allcaps").prop('disabled', true);	
				}
				else {
					$('.checkNameBtn').css('background-image', 'url(img/components/questionMark.png)');
					$scope.guessedName = "";
					$(".allcaps").prop('disabled', false);	
				}
			}
			else {
				$('.nextValid').css('background-image', 'url(img/components/nextBtn.png)');
				nextValid = true;
			}
		}
	}

	// UPGRADES

	// ********** POWER / UPG MULTIPLIER *********** //
	var upgPowerCostArray = [400,2200,6160,12936,20698,31046,45017,62124,83246,109885];
	var upgPowerLevel = 0;
	var upgPowerCost = upgPowerCostArray[upgPowerLevel];
	$scope.upgPowerCost = upgPowerCost;
	$scope.upgPowerLevel = upgPowerLevel;
	$scope.upgradePower = function () {
		if(gold >= upgPowerCost){
			gold = gold - upgPowerCost;
			upgPowerLevel++;

			// **************** //
			upgMultiplier = upgMultiplier + 0.03;
			nextUpgMultiplier = nextUpgMultiplier + 0.03;
			// **************** //

			upgPowerCost = upgPowerCostArray[upgPowerLevel]; 
			$scope.upgPowerCost = upgPowerCost;
			$scope.upgPowerLevel = upgPowerLevel;

			updateStats();	
		}
		else {
			alert("not enough gold / max level reached");
		}	
	}
	// ************************** //

	// ********** CRIT *********** //
	var upgCritCostArray = [18000,99000,277000,582000,931000,1400000,2095000,3140000,4715000,7072000];
	var upgCritLevel = 0;
	var upgCritCost = upgCritCostArray[upgCritLevel];
	$scope.upgCritCost = upgCritCost;
	$scope.upgCritLevel = upgCritLevel;
	$scope.crit = crit;
	$scope.nextCrit = nextCrit;
	$scope.upgradeCrit = function () {
		if(gold >= upgCritCost){
			gold = gold - upgCritCost;
			upgCritLevel++;

			// **************** //
			crit += 0.05;
			nextCrit += 0.05;
			// **************** //

			upgCritCost = upgCritCostArray[upgCritLevel]; 
			$scope.upgCritCost = upgCritCost;
			$scope.upgCritLevel = upgCritLevel;

			updateStats();	
		}
		else {
			alert("not enough gold / max level reached");
		}			
	}
	// ************************** //


	// ********** CRIT CHANCE *********** //
	var upgCritChanceCostArray = [20000,110000,308000,646800,1034880,1552320,2250864,3106192,4162298,5494233];
	var upgCritChanceLevel = 0;
	var upgCritChanceCost = upgCritChanceCostArray[upgCritChanceLevel];
	$scope.upgCritChanceCost = upgCritChanceCost;
	$scope.upgCritChanceLevel = upgCritChanceLevel;
	$scope.critChance = critChance;
	$scope.nextCritChance = nextCritChance;
	$scope.upgradeCritChance = function () {
		if(gold >= upgCritChanceCost){
			gold = gold - upgCritChanceCost;
			upgCritChanceLevel++;

			// **************** //
			critChance = critChance + 0.005;
			nextCritChance = nextCritChance + 0.005;
			// **************** //

			upgCritChanceCost = upgCritChanceCostArray[upgCritChanceLevel]; 
			$scope.upgCritChanceCost = upgCritChanceCost;
			$scope.upgCritChanceLevel = upgCritChanceLevel;

			updateStats();	
		}
		else {
			alert("not enough gold / max level reached");
		}		
	}
	// ************************** //

	// ********** GEM CHANCE *********** //
	var upgGemChanceCostArray = [15000,82500,231000,485100,776160,1164240,1688148,2329644,3121723,4120675];
	var upgGemChanceLevel = 0;
	var upgGemChanceCost = upgGemChanceCostArray[upgGemChanceLevel];
	$scope.upgGemChanceCost = upgGemChanceCost;
	$scope.upgGemChanceLevel = upgGemChanceLevel;
	$scope.gemChance = gemChance;
	$scope.nextGemChance = nextGemChance;
	$scope.upgradeGemChance = function () {
		if(gold >= upgGemChanceCost){
			gold = gold - upgGemChanceCost;
			upgGemChanceLevel++;

			// **************** //
			gemChance = gemChance + 0.004;
			nextGemChance = nextCritChance + 0.004;
			// **************** //

			upgGemChanceCost = upgGemChanceCostArray[upgGemChanceLevel]; 
			$scope.upgGemChanceCost = upgGemChanceCost;
			$scope.upgGemChanceLevel = upgGemChanceLevel;

			updateStats();	
		}
		else {
			alert("not enough gold / max level reached");
		}		
	}
	// ************************** //


	// ********** TRAINING EFFECT *********** //
	var upgTrainingEffectCostArray = [10000,55000,154000,323000,517000,776000,1164000,1746000,2619000,3929000];
	var upgTrainingEffectLevel = 0;
	var upgTrainingEffectCost = upgTrainingEffectCostArray[upgTrainingEffectLevel];
	$scope.upgTrainingEffectCost = upgTrainingEffectCost;
	$scope.upgTrainingEffectLevel = upgTrainingEffectLevel;
	$scope.trainingEffect = trainingEffect;
	$scope.nextTrainingEffect = nextTrainingEffect;
	$scope.upgradeTrainingEffect = function () {
		if(gold >= upgTrainingEffectCost){
			gold = gold - upgTrainingEffectCost;
			upgTrainingEffectLevel++;

			// **************** //
			trainingEffect = trainingEffect + 0.05;
			nextTrainingEffect = nextTrainingEffect + 0.05;
			// **************** //

			upgTrainingEffectCost = upgTrainingEffectCostArray[upgTrainingEffectLevel]; 
			$scope.upgTrainingEffectCost = upgTrainingEffectCost;
			$scope.upgTrainingEffectLevel = upgTrainingEffectLevel;

			updateStats();	
		}
		else {
			alert("not enough gold / max level reached");
		}
	}
	// ************************** //

	// ********** TRAIN *********** //

	$scope.train = function () {
		if(gems >= 1){
			gems--;

			// **************** //
			var rand = Math.random()*100;
			var rand2 = Math.random()+trainingEffect;
			if(rand <= 10){
				basePower = basePower*rand2;
			}
			// **************** //

			upgGemChanceCost = upgGemChanceCostArray[upgGemChanceLevel]; 
			$scope.upgGemChanceCost = upgGemChanceCost;
			$scope.upgGemChanceLevel = upgGemChanceLevel;

			updateStats();	
		}
		else {
			alert("not enough gold / max level reached");
		}	
	}
	// ************************** //


	$scope.showUpgrades = function() {
		$('.upgradeView').show();
		$('.upgradeView').animate({top : '10%'}, 500, function () {

		});
	}

	$scope.hideUpgrades = function() {
		$('.upgradeView').animate({top : '100%'}, 500, function () {
			$('.upgradeView').hide();
		});
	}


}