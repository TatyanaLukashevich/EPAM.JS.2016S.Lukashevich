var zombie = function($line, type){
	this.position = 0;
	
	this.health = 50;
	
	this.currentHealth = this.health;
	
	this.speed = 5;
	
	var $field = $("#field");
	var $zombie = $("<div class='zombie " + type + "'></div>");
	var width =  $field.width() - $zombie.width();
	
	this.healthBarText =  $("<p>" + this.health + '/' + this.currentHealth + "</p>");
	this.progress = $("<div class= 'progress-life'></div>");
	this.activePrgrss = $("<div class= 'active-life'></div>");
	this.progress.css('width', this.health)
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
		// setTimeout(function(){ 
		var intervalID = setInterval(function(){
			self.currentHealth = self.currentHealth-15;
			self.activePrgrss.css('width', this.currentHealth);
			self.healthBarText =  $("<p>" + self.health + '/' + self.currentHealth + "</p>");
			if (self.currentHealth <= 0) {
				clearTimeout(intervalID)
				self.die()
			}
		}, 3000);
		// }, 10000);
		
	}
	
	
	this.die = function(){
		$zombie.remove();
		this.position = 0;
	}
}