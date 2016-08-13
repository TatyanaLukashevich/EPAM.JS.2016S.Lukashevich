// var generateClick = false;
// if(!generateClick){
$(function() {
	function random(min, max) {
	return Math.floor((Math.random() * max) + min);
}

	function generate() {
	var $field = $(".field");
	for (var i = 0; i < 50; i++) {
		$field.append('<div class="block">'+ random(1,100) + '</div>');
	}
	$(".generate").css("cursor", "default");
	$(".generate").css("background", "red");
	generateClick = true;
	
}

	function setColor() {
		var elems = $(".block");
		for (var i = 0; i < 50; i++) {
			var element = elems[i];
			var number = parseInt(element.innerHTML);
			if(number > 75)
			{
				element.style.background = "red";
			}
			else if(number> 50)
				{
				element.style.background = "orange";
			}
			else if(number> 25)
				{
				element.style.background = "green";
			}
		}
		$(".setColor").css("cursor", "default");
		$(".setColor").css("background", "red");		
	}

		function reset() {
		var $block = $(".block");
	for (var i = 0; i < 50; i++) {
		$block.remove();
	}
		$(".reset").css("cursor", "default");
		$(".sreset").css("background", "red");		
	}

	$(".generate").on("click", generate);
	$(".setColor").on("click", setColor);
	$(".reset").on("click", reset);
})
// }

