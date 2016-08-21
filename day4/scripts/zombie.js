var zombie = function(){
	var position = 0;
	
	this.move = function($zombie, speed){
		position += speed;
		if(position > 850)
			return false;
		$zombie.css("right", position + "px");
		return true;
	}
	
	this.die = function($zombie){
		$zombie.remove();
		gameOver();
	}
}