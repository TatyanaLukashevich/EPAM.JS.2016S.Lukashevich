for(var i = 0; i < data.length; i++){
	var element=Number(data[i])
	
	if(data[i]!=0 && !element ){
		continue;
	}
	
	else if(data[i] == 0){
		data[i] = element + 10;
	}
	
	else if(data[i]>100){
		data[i] = element - 100;
	}
	
	else if(data[i]<100){
		data[i] = element + 100;
	}
}
