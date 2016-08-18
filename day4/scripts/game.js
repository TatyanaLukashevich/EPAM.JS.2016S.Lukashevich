$(function() {	
	var zombie = {};
	zombie.type = ["michael", "strong"];
	var randomLineCount = 5;
	
	$(".button").on("click", generate);

	
	function generate() {
		var randomZombie = random(0, zombie.type.length);
		var randomLine = random(1, randomLineCount);
		var type = zombie.type[randomZombie];
		var $fieldLine = $("#" + randomLine);
		var $zombie = $fieldLine.append('<div class="zombie"></div>');
		 $('.zombie').addClass(type);
	
	}
	
})
