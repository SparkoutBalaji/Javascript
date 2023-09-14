console.log("Javascript : console's");
console.info("Data Types");
console.time("Timer"); //code running time calsulation starting point
var a = [1,2,3,4,5]; //array - is a non primitive so display as a object
console.log(a);  //print the object values
var b = {Name : 'Balaji' , Age : 12 , Email : 'balaji.n@sparkouttech.com' , Phone : 80129648423};
console.log(typeof b); //object type
console.table(b); //print the index and values as a table
var c = "Warning";
console.warn(c); //print as a warning in a console with icon if run with a html file
var d = "Error";
console.error(d); //print as a error with icon
var e = "console count";
console.count(e);

for(i=1;i<20;i++){
  console.log(i);
}


console.timeEnd("Timer"); //time calculation begin from console.time and ends on this calculated by ms
