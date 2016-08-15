$(function() {	
	check("reset");
	check("setColor")
	
	$("#generate").on("click", generate);
	$("#setColor").on("click", setColor);
	$("#reset").on("click", reset);
	
	function generate() {
		reset();
		var $field = $(".field");
			for (var i = 0; i < 50; i++) {
				$field.append('<div class="block">'+ random(1,100) + '</div>');
			}
			
		check("reset");
		check("setColor")
		disable("generate");	
	}

	function setColor() {
		var elems = $(".block");
		for (var i = 0; i < 50; i++) {
			var element = elems[i];
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
		}
		
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
		document.getElementById(name).disabled = true;
		document.getElementById(name).style.cursor = "default";
		document.getElementById(name).style.background = "red";
	}

	function enable(name) {
		document.getElementById(name).disabled = false;
		document.getElementById(name).style.cursor = "pointer";
		document.getElementById(name).style.background = "white";
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
	
	
	function random(min, max) {
	return Math.floor((Math.random() * max) + min);
	}
})

