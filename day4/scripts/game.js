$(function() {	
	var zombies = [zombie.michael,zombie.strong];

	var randomLineCount = 5;
	var zombieTimeout = 100;
	var zombieHandles = [];
	var $field = $('#field');
	
	$(".button").on("click", generate);

	
	function generate() {
		var randomZombie = random(0, 1);
		var randomLine = random(1, randomLineCount);
		var type = zombies[randomZombie]();
		var currentZombie = new zombies[randomZombie]();
		var $fieldLine = $("#" + randomLine);
		var $zombie = $fieldLine.append('<div class="zombie"></div>');
		var $currentZombie = $('.zombie').addClass(type);
		var zombieId = setInterval(function(){
			if(!currentZombie.move($currentZombie, 5)){
				currentZombie.die($currentZombie);
				clearTimeout(zombieId);
			}
		},100);
	}

	
})
