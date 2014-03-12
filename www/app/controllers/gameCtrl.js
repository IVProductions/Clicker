function gameCtrl($scope, $location, records, statsRecords){

	var firstKill = true;
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
	var upgPowerLevel = parseInt(currentStats.upgPowerLvl);
	// ****** BASEPOWER ******* //
	var basePower = parseInt(currentStats.basePower);
	// ****** TOTAL POWER ******* //
	var totalPower = hitMultiplier*upgMultiplier*nameMultiplier*basePower;
	// ****** CRIT ******* //
	var crit = parseFloat(currentStats.crit);
	var nextCrit = crit + 0.05;
	var upgCritLevel = parseInt(currentStats.upgCritLvl);
	// ****** CRITCHANCE ******* //
	var critChance = parseFloat(currentStats.critChance);
	var nextCritChance = critChance + 0.005;
	var upgCritChanceLevel = parseInt(currentStats.upgCritChanceLvl);
	// ****** GEMCHANCE ******* //
	var gemChance = parseFloat(currentStats.gemChance);
	var nextGemChance = gemChance + 0.001;
	var upgGemChanceLevel = parseInt(currentStats.upgGemChanceLvl);
	// ****** TRAINING EFFECT ******* //
	var trainingEffect = parseFloat(currentStats.trainingEffect);
	var nextTrainingEffect = trainingEffect + 0.05;
	var upgTrainingEffectLevel =  parseInt(currentStats.upgTrainingEffectLvl);

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
		currentStats.upgPowerLvl = upgPowerLevel;
		currentStats.upgCritLvl = upgCritLevel;
		currentStats.upgCritChanceLvl = upgCritChanceLevel;
		currentStats.upgGemChanceLvl = upgGemChanceLevel;
		currentStats.upgTrainingEffectLvl = upgTrainingEffectLevel;

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
			var random1 = Math.random();
			if(random1 <= critChance){
				$(".crit").remove();
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
				if(!enemy.defeated){
					firstKill = true;
				}
				else {
					firstKill = false;
				}
				enemy.defeated = true;
				// GEM CHANCE
				var random2 = Math.random();
				if(random2 <= gemChance || firstKill){
					firstKill = false;
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
					currentStats.clickscore = totalClicks;

					alert("Gratulerer! Din score: "+totalClicks);
				}
				if($scope.index != max){
					nextValid = true;
					$('.nextValid').css('background-image', 'url(img/components/nextBtn.png)');
					if(($scope.index + 2) > parseInt(currentStats.highscore)){
						currentStats.highscore = parseInt($scope.index + 2);
					}
				}


			}
			percentage = (currentHealth/health)*100;
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
				$('.checkNameBtn').css('background-image', 'url(img/components/checkBtn.png)');
				$('.checkNameBtn').css('background-color', 'transparent!important');
				$('.allcaps').prop('disabled', true);	
				currentStats.names = parseInt(currentStats.names) + 1;
				updateStats();
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
					$('.checkNameBtn').css('background-color', 'transparent!important');
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
					$('.checkNameBtn').css('background-color', 'transparent!important');c
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
				$('.nextValid').css('background-image', 'none');
				nextValid = true;
			}
		}
	}

	// UPGRADES

	// ********** POWER / UPG MULTIPLIER *********** //
	var upgPowerCostArray = [20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,400,410,420,430,440,450,460,470,480,490,500,510,520,530,540,550,560,570,580,590,600,610,620,630,640,650,660,670,680,690,700,710,720,730,740,750,760,770,780,790,800,810,820,830,840,850,860,870,880,890,900,910,920,930,940,950,960,970,980,990,1000];
	var upgPowerCost = upgPowerCostArray[upgPowerLevel];
	$scope.upgPowerCost = upgPowerCost;
	$scope.upgPowerLevel = upgPowerLevel + 1;
	$scope.upgradePower = function () {
		if(gold >= upgPowerCost && upgPowerLevel != upgPowerCostArray.length){
			gold = gold - upgPowerCost;
			upgPowerLevel++;

			// **************** //
			upgMultiplier = upgMultiplier + 0.03;
			nextUpgMultiplier = upgMultiplier + 0.03;
			// **************** //

			upgPowerCost = upgPowerCostArray[upgPowerLevel];
			updateCosts(); 
			$scope.upgPowerCost = upgPowerCost;
			$scope.upgPowerLevel = upgPowerLevel + 1;

			updateStats();
		}
		else {

		}	
	}
	// ************************** //

	// ********** CRIT *********** //
	var upgCritCostArray = [40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400,420,440,460,480,500,520,540,560,580,600,620];
	var upgCritCost = upgCritCostArray[upgCritLevel];
	$scope.upgCritCost = upgCritCost;
	$scope.upgCritLevel = upgCritLevel + 1;
	$scope.crit = crit;
	$scope.nextCrit = nextCrit;
	$scope.upgradeCrit = function () {
		if(gold >= upgCritCost && upgCritLevel != upgCritCostArray.length){
			gold = gold - upgCritCost;
			upgCritLevel++;


			// **************** //
			crit += 0.05;
			nextCrit += 0.05;
			// **************** //

			upgCritCost = upgCritCostArray[upgCritLevel]; 
			updateCosts();
			$scope.upgCritCost = upgCritCost;
			$scope.upgCritLevel = upgCritLevel + 1;

			updateStats();	
		}
		else {
			//alert("not enough gold / max level reached");
		}			
	}
	// ************************** //


	// ********** CRIT CHANCE *********** //
	var upgCritChanceCostArray = [100,200,300,400,500,600,700,800,900,1000];
	var upgCritChanceCost = upgCritChanceCostArray[upgCritChanceLevel];
	$scope.upgCritChanceCost = upgCritChanceCost;
	$scope.upgCritChanceLevel = upgCritChanceLevel + 1;
	$scope.critChance = critChance;
	$scope.nextCritChance = nextCritChance;
	$scope.upgradeCritChance = function () {
		if(gold >= upgCritChanceCost && upgCritChanceLevel != upgCritChanceCostArray.length){
			gold = gold - upgCritChanceCost;
			upgCritChanceLevel++;

			// **************** //
			critChance = critChance + 0.005;
			nextCritChance = critChance + 0.005;
			// **************** //

			upgCritChanceCost = upgCritChanceCostArray[upgCritChanceLevel];
			updateCosts(); 
			$scope.upgCritChanceCost = upgCritChanceCost;
			$scope.upgCritChanceLevel = upgCritChanceLevel + 1;

			updateStats();	
		}
		else {
			//alert("not enough gold / max level reached");
		}		
	}
	// ************************** //

	// ********** GEM CHANCE *********** //
	var upgGemChanceCostArray = [200,400,600,800,1000,1200,1400,1600,1800,2000,2200,2400,2600,2800,3000,3200,3400,3600,3800];
	var upgGemChanceCost = upgGemChanceCostArray[upgGemChanceLevel];
	$scope.upgGemChanceCost = upgGemChanceCost;
	$scope.upgGemChanceLevel = upgGemChanceLevel + 1;
	$scope.gemChance = gemChance;
	$scope.nextGemChance = nextGemChance;
	$scope.upgradeGemChance = function () {
		if(gold >= upgGemChanceCost && upgGemChanceLevel != upgGemChanceCostArray.length){
			gold = gold - upgGemChanceCost;
			upgGemChanceLevel++;

			// **************** //
			gemChance = gemChance + 0.001;
			nextGemChance = gemChance + 0.001;
			// **************** //

			upgGemChanceCost = upgGemChanceCostArray[upgGemChanceLevel]; 
			updateCosts();
			$scope.upgGemChanceCost = upgGemChanceCost;
			$scope.upgGemChanceLevel = upgGemChanceLevel + 1;

			updateStats();	
		}
		else {
			//alert("not enough gold / max level reached");
		}		
	}
	// ************************** //


	// ********** TRAINING EFFECT *********** //
	var upgTrainingEffectCostArray = [150,300,450,600,750,900,1050,1200,1350,1500,1650,1800,1950,2100,2250,2400,2550,2700,2850,3000];
	var upgTrainingEffectCost = upgTrainingEffectCostArray[upgTrainingEffectLevel];
	$scope.upgTrainingEffectCost = upgTrainingEffectCost;
	$scope.upgTrainingEffectLevel = upgTrainingEffectLevel + 1;
	$scope.trainingEffect = trainingEffect;
	$scope.nextTrainingEffect = nextTrainingEffect;
	$scope.upgradeTrainingEffect = function () {
		if(gold >= upgTrainingEffectCost && upgTrainingEffectLevel != upgTrainingEffectCostArray.length){
			gold = gold - upgTrainingEffectCost;
			upgTrainingEffectLevel++;

			// **************** //
			trainingEffect = trainingEffect + 0.05;
			nextTrainingEffect = trainingEffect + 0.05;
			// **************** //

			upgTrainingEffectCost = upgTrainingEffectCostArray[upgTrainingEffectLevel]; 
			updateCosts();
			$scope.upgTrainingEffectCost = upgTrainingEffectCost;
			$scope.upgTrainingEffectLevel = upgTrainingEffectLevel + 1;

			updateStats();	
		}
		else {
			//alert("not enough gold / max level reached");
		}
	}
	// ************************** //

	// ********** TRAIN *********** //

	$scope.train = function () {
		if(gems >= 1){
			gems--;

			if(gems >=1){
				$('.trainBtn').css('background-image', 'url(img/components/trainBtn.png)');	
			}
			else {
				$('.trainBtn').css('background-image', 'url(img/components/trainBtn-Disabled.png)');		
			}

			// **************** //
			var rand = Math.random()*100;
			var rand2 = Math.random()+trainingEffect;
			//if(rand <= 10){
				basePower = basePower + (9+upgTrainingEffectLevel)*rand2;
			//}
			// **************** //

			upgGemChanceCost = upgGemChanceCostArray[upgGemChanceLevel]; 
			$scope.upgGemChanceCost = upgGemChanceCost;
			$scope.upgGemChanceLevel = upgGemChanceLevel + 1;

			updateStats();	


		}
		else {
			//alert("not enough gold / max level reached");
		}	
	}
	// ************************** //


	$scope.showUpgrades = function() {
		updateCosts();

		if(gems >=1){
			$('.trainBtn').css('background-image', 'url(img/components/trainBtn.png)');	
		}
		else {
			$('.trainBtn').css('background-image', 'url(img/components/trainBtn-Disabled.png)');		
		}

		$('.upgradeView').show();
		$('.upgradeView').animate({top : '10%'}, 500, function () {

		});
	}

	$scope.hideUpgrades = function() {
		$('.upgradeView').animate({top : '100%'}, 500, function () {
			$('.upgradeView').hide();
		});
	}

	var updateCosts = function() {
		if(upgTrainingEffectLevel == (upgTrainingEffectCostArray.length)){
			$('.trainEffectBtn').css('background-image', 'url(img/components/upgBtn-Max.png)');
			$('.info.5 .next').hide();
			$('.info.5 .cost').hide();
		}
		else if(gold >= upgTrainingEffectCost){
			$('.trainEffectBtn').css('background-image', 'url(img/components/upgBtn-Active.png)');	
		}
		else {
			$('.trainEffectBtn').css('background-image', 'url(img/components/upgBtn-Disabled.png)');		
		}

		if(upgGemChanceLevel == (upgGemChanceCostArray.length)){
			$('.gemChanceBtn').css('background-image', 'url(img/components/upgBtn-Max.png)');
			$('.info.4 .next').hide();
			$('.info.4 .cost').hide();
		}
		else if(gold >= upgGemChanceCost){
			$('.gemChanceBtn').css('background-image', 'url(img/components/upgBtn-Active.png)');	
		}
		else {
			$('.gemChanceBtn').css('background-image', 'url(img/components/upgBtn-Disabled.png)');		
		}

		if(upgCritChanceLevel == (upgCritChanceCostArray.length)){
			$('.critChanceBtn').css('background-image', 'url(img/components/upgBtn-Max.png)');
			$('.info.3 .next').hide();
			$('.info.3 .cost').hide();
		}
		else if(gold >= upgCritChanceCost){
			$('.critChanceBtn').css('background-image', 'url(img/components/upgBtn-Active.png)');	
		}
		else {
			$('.critChanceBtn').css('background-image', 'url(img/components/upgBtn-Disabled.png)');		
		}

		if(upgCritLevel == (upgCritCostArray.length)){
			$('.critBtn').css('background-image', 'url(img/components/upgBtn-Max.png)');
			$('.info.2 .next').hide();
			$('.info.2 .cost').hide();
		}
		else if(gold >= upgCritCost){
			$('.critBtn').css('background-image', 'url(img/components/upgBtn-Active.png)');	
		}
		else {
			$('.critBtn').css('background-image', 'url(img/components/upgBtn-Disabled.png)');		
		}

		if(upgPowerLevel == (upgPowerCostArray.length)){
			$('.powerBtn').css('background-image', 'url(img/components/upgBtn-Max.png)');
			$('.info.1 .next').hide();
			$('.info.1 .cost').hide();
		}
		else if(gold >= upgPowerCost){
			$('.powerBtn').css('background-image', 'url(img/components/upgBtn-Active.png)');	
		}
		else {
			$('.powerBtn').css('background-image', 'url(img/components/upgBtn-Disabled.png)');		
		}
	}

	$scope.changeView = function(view){
        $location.path(view);
    }

}
