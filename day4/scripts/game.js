$(function() {	
	var zombies = [zombie.michael,zombie.strong];
	var zombiesArray = [];
	var randomLineCount = 5;
	var zombieTimeout = 100;
	var $field = $('#field');
	
	var isPaused = false;
	var click = 0;
	
	$("#start").on("click", generate);
	$("#pause").on("click", pause);
	$("#slowUp").on("click", slowUpZombie);
	$("#growOld").on("click", growOldZombie);
	$("#expld").on("click", explode);
	
	function generate() {
			var gameId = setInterval(function() {
			$(".game-over").css("display","none");
			var randomZombie = random(0, 1);
			var randomLine = random(1, randomLineCount);
			var $fieldLine = $("#" + randomLine);
			var currentZombie = new zombies[randomZombie]($fieldLine, randomZombie);
			zombiesArray.push(currentZombie);
			if(isPaused) {
				clearTimeout(gameId);
			}
			var intervalId = setInterval(function(){
				if(!currentZombie.move()){
					clearTimeout(intervalId);
					gameOver();
				}
				else if(isPaused){
					clearTimeout(intervalId);
				}
			},100);
				}, 2500)
		$('#start').css("background", "gray");	

	};
				
	

	
	function slowUpZombie() {
		if(!isPaused) {
			$('#slowUp').css("border", "1px solid red");	
			$(zombiesArray).each(function(index, element) {
			zombiesArray[index].slowUp();
			})
			setInterval(function(){$('#slowUp').css("border", "none")}, 200);
		}
	}
	
	function growOldZombie() {
		if(!isPaused) {
			$('#growOld').css("border", "1px solid red");	
			$(zombiesArray).each(function(index, element) {
			zombiesArray[index].growOld();		
			})
			setInterval(function(){$('#growOld').css("border", "none")}, 200);
		}
	}
	
	function explode() {
		if(!isPaused) {
			$('#expld').css("border", "1px solid red");	
			$(zombiesArray).each(function(index, element) {
				this.explode(15);
				if (zombiesArray[index].currentHealth  <= 0) {
					zombiesArray[index].die()
			}
			})
			setInterval(function(){$('#expld').css("border", "none")}, 200);
		}
	}

	function pause() {
		click++;
		if(click%2!=0) {
			isPaused = true;
		}
		else {
			isPaused = false;
			$(zombiesArray).each(function(index, element) {
				var intervalId = setInterval(function(){
				if(!zombiesArray[index].move()){
					clearTimeout(intervalId);
					gameOver();
				}
				else if(isPaused){
					clearTimeout(intervalId);
				}
			},100);
		})
			generate();
		}
		$('#pause').css("border", "1px solid red");	

		setInterval(function(){$('#pause').css("border", "none")}, 200);
	}
	
	function gameOver(){
		$(".game-over").css("display","block");
		$(".zombie").remove();
	}	
})

