var isPaused = false;
$(function() {	
	var zombies = [zombie.michael,zombie.strong];
	var zombiesArray = [];
	var plantArray = [];
	var randomLineCount = 5;
	var zombieTimeout = 100;
	var $field = $('#field');
	var gameId;
	var click = 0;
	var isStart = false;
	var isGrowInLine = false;
	
	$("#start").on("click", generate);
	$("#pause").on("click", pause);
	$("#slowUp").on("click", slowUpZombie);
	$("#growOld").on("click", growOldZombie);
	$("#expld").on("click", explode);
	$("#plant").on("click", generatePlant);
	
	
	if(!isStart) {
		beforeStart();
	}
	else{
		afterStart();
	}
	
	function generate() {
			isStart = true;
			afterStart();
			gameId = setInterval(function() {
			$(".game-over").css("display","none");
			
			var randomZombie = random(0, 1);
			var randomLine = random(1, randomLineCount);
			var $fieldLine = $("#" + randomLine);
			var currentZombie = new zombies[randomZombie]($fieldLine, randomZombie);
			
			zombiesArray.push(currentZombie);
			if(isPaused) {
				clearTimeout(gameId);
			}
			
			Move(currentZombie);
			}, 2500)
			
			toDisabled('start');
	};
				
		function generatePlant(){			
		var randomLine = random(1, randomLineCount);
		var $fieldLine = $("#" + randomLine);
		var position = random(550, 900);
		if($($fieldLine).find(".plant").length > 0) {
			return;
		}
		else {
			var currentPlant = new plant($fieldLine, position);
			plantArray.push(currentPlant);
		}
	}
	
	function slowUpZombie() {
		if(!isPaused) {
			$(zombiesArray).each(function(index, element) {
			zombiesArray[index].slowUp();
			})
			toDisabled('slowUp');
			toEnabled('slowUp');
		}
		
	}
	
	function growOldZombie() {
		if(!isPaused) {
			$(zombiesArray).each(function(index, element) {
			zombiesArray[index].growOld();		
			})
			toDisabled('growOld');
			toEnabled('growOld');
		}
	}
	
	function explode() {
			$(zombiesArray).each(function(index, element) {
				this.explode(15);
				if (zombiesArray[index].currentHealth  <= 0) {
					zombiesArray[index].die()
			}
			})
			toDisabled('expld');
			toEnabled('expld');
	}

	function pause() {
		beforeStart();
		click++;
		if(click%2!=0) {
			isPaused = true;
		}
		else {
			isPaused = false;
			$(zombiesArray).each(function(index, element) {
			Move(zombiesArray[index]);
		})
			generate();
		}

		setInterval(function(){$('#pause').css("border", "none")}, 200);
	}
	
	function gameOver(){
		$(".game-over").css("display","block");
		$(".zombie").remove();
		clearInterval(gameId);
	}	
	
	function Move(movedObject){
		var intervalId = setInterval(function(){
			if(!movedObject.move()){
				clearTimeout(intervalId);
				gameOver();
			}
			else if(isPaused){
				clearTimeout(intervalId);
			}
			isWounded(movedObject);
		},100);
	}
	
	function toDisabled(id) {
		$("#" + id).prop('disabled', true);
	}
	
	function toEnabled(id) {
		setTimeout(function(){
			$("#" + id).prop('disabled', false);
		},10000)
	}
	
	function beforeStart() {
		toDisabled('plant');
		toDisabled('slowUp');
		toDisabled('growOld');
		toDisabled('expld');
	}
	
	function afterStart() {
		$("#plant").prop('disabled', false);
		$("#slowUp").prop('disabled', false);
		$("#growOld").prop('disabled', false);
		$("#expld").prop('disabled', false);
	}
	
	function isWounded(zombie) {
		if(zombiesArray[0].position >= 550) {
		$(zombiesArray).each(function(index, element) {
				var plantInLine = zombiesArray[index].line.find(".plant");
				if (plantInLine.length > 0) {
					if (zombiesArray[index].position == (plantInLine[0].offsetLeft+75)) {
						zombie.crash(10);
					}
			}
			})
	}
	}
	
	// var length = zombiesArray.length;
		// for (var i = 0; i <= length; i++) {
			// if (zombies[i] == undefined) continue;

			// var heigth = $("#field").offsetHeight;
			// var positionTop = parseInt(zombiesArray[i].style.top, 10);
			// var positionLeft = parseInt(zombiesArray[i].style.left, 10);
			// var positionPlantLeft = parseInt($(".plant").style.left, 10);

			// var plantHeight = $(".plant").clientHeight;
			// var plantWidth = $(".plant").clientWidth;
			
			// if (positionTop > heigth - plantHeight && positionLeft - positionPlantLeft <
				// plantWidth && positionLeft > positionPlantLeft) {
					// type.health -= 5;
			// }
		// }
	// }

		
		
})

