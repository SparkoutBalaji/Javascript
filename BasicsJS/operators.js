//single line comment
/*
multiple
line comment
*/
// alert('Hi, BALAJI');
var a = 0;    //variable a initialize value o - this is a statement
a = 10;       //assign a variable value 10
a = "Hi, BALAJI N - Sparkout Tech Solutions \nSoftware Developer Trainee";  //javascript is a dynamically types laguage so am not put this variable is a number or string
console.log(a);  //final declaring same variable value show.

//operators
//assignment operator
console.log("Arithmetic Operator : ");
let one = 10;
let two = 5;

let addition = one + two; //addition
let substraction = one - two; //substraction
let multiplication= one * two; //multiplication
let division = one / two; //division
let modulus = one % two; //modulus
let exponential = one ** two; //Exponential

console.log("Addition 100 + 50 = ",addition);
console.log("Substraction 100 - 50 = ",substraction);
console.log("Multiplication 100 * 50 = ",multiplication);
console.log("Division 100 / 50 = ",division);
console.log("Modulus 100 % 50 = ",modulus);
console.log("Exponential 100 ** 50 = ",exponential);

//Assignment Operator
console.log("Assignment Operator : ");
let x = 100;                  //value assigning also assignment operator (=)
x += 5;
console.log("100 += 5 is : ",x);
x -= 10;
console.log("105 -= 10 is : ",x);
x *= 2;
console.log("95 *= 2 is : ",x);
x /= 3;
console.log("190 /= 3 is : ",x);
x %= 5;
console.log("63.333333333333336 %= 5 is : ",x);
x **= 2;
console.log("3.3333333333333357 **= 2 is : ",x);

//comparison Operator
console.log("Comparison Operator :");
let aa = 2;
let bb = 2;
let cc = '3';
let equalto = aa == bb;
console.log("equal to 2 == 2 : ",equalto);
let equalvt = aa === cc;
console.log("equal value and equal type 2 === 3 is : ",equalvt);
let notequal = aa != bb;
console.log("Not equal to 2 != 2 is : ",notequal);
let notequalntype = aa !== bb;
console.log("Not Equal and tyep 2 !== 2 is : ",notequalntype);
let gthen = aa > bb;
console.log("Greater than 2 > 2 is : ",gthen);
let lthen = aa < cc;
console.log("Less then 2 < '3' is = ", lthen);
let gthenor = aa >= cc;
console.log("Greater than or equal 2 > '3' is : ",gthenor);
let lthenor = aa <= cc;
console.log("Less than or Equal 2 <= '3' is : ",lthenor);
let ternary = (2 == 2) ? true : false;
console.log("ternary operator 2==2 is : ",ternary);
let str1 = 'z';
let str2 = 'c';
let str = str1 < str2;
console.log("a < d is : ",str); //string's comparing
let fname = "BALAJI";
let lname = "N";
let name = fname +" "+ lname;
console.log(name); 
lname += " "+fname;
console.log("finally lname = ",lname); //with assignment operator

//logical operator
console.log("Logical Operator :");

let abc = 2;
let def = 4;

if(abc==2 && def ==3)
{
  console.log("abc==2 && def==3 is true");
}
else
{
  console.log("AND Operator : abc==2 && def==4 is false")
}

if(abc==2 || def==3)
{
  console.log("OR operator abc==2 || def==3 is true")
}
else
{
  console.log("OR operator abc==2 || def==3 is false");
}

if(!(abc==def))
{
  console.log("Not abc==def is true");
}
else
{
  console.log("Not abc==def is false");
}

//nullish coalescing operator
console.log("Nullish Coalescing Operator :");
let amount = null;
let text = "Empty";
let nullcoalescing = amount ?? text;
console.log("Amount : ",nullcoalescing);