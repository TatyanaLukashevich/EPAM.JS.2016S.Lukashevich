var plant = function($line, position){
	this.position = position;
	var $field = $("#field");
	var $plant = $("<div class='plant'></div>");
	$plant.css('margin-left', 900 - this.position);
	$line.append($plant);	
}