var zombie = function($line, type){
	this.position = 0;
	
	this.health = 50;
	
	this.currentHealth = this.health;
	
	this.speed = 2;
	
	var $field = $("#field");
	var width =  $field.width() - $('.zombie').width();;
	var $zombie = $("<div class='zombie " + type + "'></div>");
	this.healthBarText =  $("<p>" + this.health + '/' + this.currentHealth + "</p>");
	this.progress = $("<div class= 'progress-life'></div>");
	this.activePrgrss = $("<div class= 'active-life'></div>");
	this.activePrgrss.css('width', this.currentHealth)
	// ("<progress value= " + this.currentHealth + ' max=' + this.health +"'></progress>");
	$zombie.append(this.healthBarText);	
	$zombie.append(this.progress);
	this.progress.append(this.activePrgrss);
	$line.append($zombie);	
	
	
	this.move = function(){
		this.position += this.speed;
		
		if(this.position > width) {
			this.die();
			return false;
		}
		
		
		$zombie.css("right", this.position + "px");
		return true;
	}
	
	this.slowUp = function(){ 
		this.speed = this.speed/5; 
		var self = this; 
		setTimeout(function(){ 
		self.speed =  self.speed*5; 
		}, 5000); 
	}
	
	this.growOld = function() {
		var self = this; 
		setTimeout(function(){ 
		var intervalID = setInterval(function(){
			self.currentHealth=self.currentHealth-5;
			if (self.currentHealth == 0) {
				clearTimeout(intervalID)
				self.die()
			}
		}, 1000);
		}, 10000);
		
	}
	
	this.die = function(){
		$zombie.remove();
		this.position = 0;
	}
}