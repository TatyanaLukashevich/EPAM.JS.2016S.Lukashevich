$(function() {	
	check("reset");
	check("setColor");
	
	$(".generate").on("click", generate);
	$(".setColor").on("click", setColor);
	$(".reset").on("click", reset);
	
	function generate() {
		reset();
		function random(min, max) {
			return Math.floor((Math.random() * max) + min);
		}		
		
		var $field = $(".field");
			for (var i = 0; i < 50; i++) {
				$field.append('<div class="block">'+ random(1,100) + '</div>');
			}
			
		check("reset");
		check("setColor")
		disable("generate");	
	}

	function setColor() {
		$(".block").each(function(index, element) {
			var number = parseInt(element.innerHTML);
			if(number > 75) {
					element.style.background = "red";
				}			
				else if(number> 50) {
					element.style.background = "orange";
				}			
				else if(number> 25) {
					element.style.background = "green";
				}
		});
		
		disable("setColor");		
	}

	function reset() {
		var $block = $(".block");
		for (var i = 0; i < 50; i++) {
			$block.remove();
		}
		
		enable("generate");
		disable("reset");		
	}			
	
	function disable(name) {
		$("." + name).addClass("disable");
	}

	function enable(name) {
		$("." + name).removeClass("disable");
	}
	
	function check(name) {
		var $block = $(".block");
		
		if($block.length == 0)
		{
			disable(name);
		}
		else{
			enable(name);
		}
	}
	
})

