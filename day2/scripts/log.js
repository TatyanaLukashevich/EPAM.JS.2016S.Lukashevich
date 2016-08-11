for(var i = 1; i <= 3; i++){
	var mainCount = 0;
	var method = "getCount" + i; 
	
	for (var j = 0; j < data.length; j++) {
		//check whether the data[j] contains particular method.
		switch (method in data[j]) {
			case true:
			mainCount += data[j][method]();
		}
	}
	
	console.log("main count{%s}=%s", i, mainCount);
}