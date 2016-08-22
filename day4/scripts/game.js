$(function() {	
	var zombies = [zombie.michael,zombie.strong];

	var randomLineCount = 5;
	var zombieTimeout = 100;
	var $field = $('#field');
	
	$(".button").on("click", generate);

	
	function generate() {
		var randomZombie = random(0, 1);
		var randomLine = random(1, randomLineCount);
		var $fieldLine = $("#" + randomLine);
		var currentZombie = new zombies[randomZombie]($fieldLine, randomZombie);
		var zombieId = setInterval(function(){
			if(!currentZombie.move(5)){
				clearTimeout(zombieId);
			}
		},100);
	}	
})

function gameOver()
	{
		$(".game-over").css("display","block");
		$(".zombie").remove();
	}