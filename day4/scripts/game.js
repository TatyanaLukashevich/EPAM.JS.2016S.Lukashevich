$(function() {	
	var zombies = [zombie.michael,zombie.strong];
	var zombiesArray = [];
	var randomLineCount = 5;
	var zombieTimeout = 100;
	var $field = $('#field');
	
	$("#gnrt").on("click", generate);
	$("#slowUp").on("click", slowUpZombie);
	$("#growOld").on("click", growOldZombie);
	$("#expld").on("click", explode);
	
	function generate() {
		$(".game-over").css("display","none");
		var randomZombie = random(0, 1);
		var randomLine = random(1, randomLineCount);
		var $fieldLine = $("#" + randomLine);
		var currentZombie = new zombies[randomZombie]($fieldLine, randomZombie);
		zombiesArray.push(currentZombie);
		var intervalId = setInterval(function(){
			if(!currentZombie.move()){
				clearTimeout(intervalId);
				gameOver();
			}
		},100);
	}

	
	function slowUpZombie() {
		$(zombiesArray).each(function(index, element) {
			zombiesArray[index].slowUp();
		})
	}
	
	function growOldZombie() {
		$(zombiesArray).each(function(index, element) {
			zombiesArray[index].growOld();
		
		})
	}
	
	function explode() {
		$(zombiesArray).each(function(index, element) {
			this.explode(15);
			if (zombiesArray[index].currentHealth  <= 0) {
				zombiesArray[index].die()
			}
		})
	}

	function gameOver(){
		$(".game-over").css("display","block");
		$(".zombie").remove();
	}	
})

