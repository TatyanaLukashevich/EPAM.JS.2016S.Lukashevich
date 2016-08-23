zombie.strong = function($line){
	zombie.call(this, $line, "strong");
	this.health = 70;
	this.minSpeed = 0.5;
	this.currentHealth = this.health;
	this.healthBarText.text(this.health + '/' + this.currentHealth);
	this.progress.css('width', this.health)
	this.activePrgrss.css('width', this.currentHealth)
}