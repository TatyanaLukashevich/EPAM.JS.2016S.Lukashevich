var data = [];

for(var i = 0; i < 5; i++){
	var type = random(1, 3);
	data[i] = {};
	data[i]["count"] = random(1, 10);
	data[i]["getCount" + type] = function(){ 
		return this.count;
	};
	console.log("type={%s}, count={%s}", type, data[i].count);
}

