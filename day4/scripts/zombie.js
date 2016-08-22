var zombie = function($line, type){
	var $zombie = $("<div class='zombie " + type + "'></div>");
	$line.append($zombie);
	var position = 0;
	var $field = $("#field");
	var width =  $field.width() - 50;
	
	this.move = function(speed){
		position += speed;
		
		if(position > width) {
			this.die();
		}
		
		$zombie.css("right", position + "px");
		return true;
	}
	
	this.die = function(){
		$zombie.remove();
		gameOver();
		position = 0;
	}
}