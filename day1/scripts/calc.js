for(var i=0; i<data.length;i++){
	if(typeof(data[i]) != "number" ){
		continue;
	}
	
	if(data[i] == 0){
		data[i]+=10;
	}
	
	else if(data[i]>100){
		data[i]-=100;
	}
	
	else if(data[i]<100){
		data[i]+=100;
	}
}