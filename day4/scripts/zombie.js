var zombie = function($line, type){
	this.position = 0;
	
	this.health = 50;
	
	this.currentHealth = this.health;
	
	this.speed = 5;
	
	var $field = $("#field");
	var $zombie = $("<div class='zombie " + type + "'></div>");
	var isAlive = true;
	
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
	var width =  $field.width() - $zombie.width();
	
	this.move = function(){
		this.position += this.speed;
		
		if(this.position > width) {
			this.die();
			return false;
		}
		
		if(!isAlive)
		{
			this.die();
			return true;
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
		var count = 10;
		var x=setInterval(function(){			
			  if(count ==0) {
				 clearInterval(x);
			  }
			  else {
				self.currentHealth--;
				self.activePrgrss.css('width', this.currentHealth);
				self.healthBarText.text(self.currentHealth + '/' + self.health);  
			  }

			  count--;
			}, 1000);		
	}
	
	
	this.die = function(){
		$zombie.remove();
		isAlive = false;
		this.position = 0;
	}
}