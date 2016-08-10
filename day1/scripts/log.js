document.addEventListener("DOMContentLoaded", function() { 
for(var i=0; i<data.length;i++){
	var element;
	if(typeof(data[i]) == "undefined" ){
		element = "element is undefined";
	}
	
	else if(data[i] == null){
		element = "element is not specified";
	}
	
	else{
		element = data[i];
	}
	
	  console.log("data[{0}]={1}", i, element);
}
});