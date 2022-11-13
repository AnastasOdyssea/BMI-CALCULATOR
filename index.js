
var weight;
var height;
var bmi ;
var measure;


function number() {
    height = document.getElementById("height").value;
    weight = document.getElementById("weight").value;
    bmi = weight/(Math.pow(height,2));
    measure = "Your BMI is " + bmi ;

    
   
    if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	
 
 
}


   
        
    


