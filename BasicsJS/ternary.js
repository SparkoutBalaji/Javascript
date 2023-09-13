//ternary operator

function success(){
  console.log("Successed");
}
function fail(){
  console.log("Failed");
}

const result = false;

var ternary = result ? success() : fail() ;   // ? 'true' : 'false' 


// //nested ternary operator

var score = 60;

var total = score > 90
            ? "Excellent than 90"     // ? 'true'
            : score > 70              // : 'false'
            ? "Greater than 70"
            : "Less than 70";

  console.log(total); //Less than 70