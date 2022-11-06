const age = getElementById('age') ;
const height = getElementById('height');
const weight = getElementById('weight');
const calculate = getElementById('calculate');
console.log("age");

function result(weight,height) {
    var bmi = weight/(Math.pow(height,2));
    return bmi;
 
}
