
var weight;
var height;
var bmi ;
var calculate;
function number() {
    height = document.getElementById("height").value;
    weight = document.getElementById("weight").value;
    bmi = weight/(Math.pow(height,2));
    calculate = "Your BMI is " + bmi ;
	document.getElementById("results").innerHTML = calculate; 
	if (weight < 0) {
		document.getElementById("results").innerHTML = "No negative values ";
	}
    if (height < 0) {
		document.getElementById("results").innerHTML = "No negative values ";
	}
}
   
	
 
 



   
        
    


