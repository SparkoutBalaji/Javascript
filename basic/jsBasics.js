//command and variable declaring assigning a value

let a;      //declare a is a variable
a	=	10;     //variable values is 10 //-is a single line command
var b	=	10;
var	c	=	a	+	b;    /* variable c value
                     is a sum of a + b
                     by the multi-line
                     command*/

console.log("a + b = ",c);

//local-variable & global variable

var d=25;               //outside the function declaring a variable value

function x(){
  console.log("x function Global variable d : ",d); //called on x function
}
function y(){
  console.log("y function Global variable d : ",d); //called on y function
}

x();
y();


function z(){
  var a = 22;                       //local variable
  console.log("a value is : ",a);
}
z();

console.log("a value is : ",a);   //didn't print the value 22 because the variable value stored inside the function if am call it shows value 10 top am declare a value is 10.

