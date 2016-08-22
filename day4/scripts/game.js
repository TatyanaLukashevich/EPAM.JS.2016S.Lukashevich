$(function() {	
	var zombies = [zombie.michael,zombie.strong];
	var zombiesArray = [];
	var randomLineCount = 5;
	var zombieTimeout = 100;
	var $field = $('#field');
	
	$("#gnrt").on("click", generate);
	$("#slowUp").on("click", slowUpZombie);
	$("#growOld").on("click", growOldZombie);
	
	function generate() {
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

	function gameOver(){
		$(".game-over").css("display","block");
		$(".zombie").remove();
	}	
})

