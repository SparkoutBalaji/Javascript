var x = 1;
const z = 3;
//z=4; //constant keword reassign makes error
function scope(){
  let y = 2;
  
  console.log("In scope x = ",x);
  console.log("In scope y = ",y);
  console.log("In scope z = ",z);
}
scope();
console.log("Outside scope x = ",x);
//console.log("Outside scope y = ",y);  //ReferenceError: y is not defined
console.log("Outside scope z = ",z);

console.log(x); //var return : underfined
var x;
console.log(x); //undefined

//console.log(y); //Cannot access 'y' before initialization
let y;
console.log(y); //not return : undefined , only point out the error before declaring let call y error

  let a = 10;       //let variable
  //let a = 30;     //node able to declare let a = 30;
  a = 50;           //able to declare without let keyword and reassign is able

console.log(a);     //50

  var b = 0;        //var variable declare and assign the value as o
  b = 1;            //without var keyword able to re assign a variable value
  var b = 12;       //with variable also able to re assign
  console.log(b);   //12

{                 //{block scope}
  var aa = 20;    //var keyword variable value able to access outside on the block
}
console.log(aa);  //20

{
  let bb = 22;
  console.log(bb);  //22 - (able to access inside the block)
}
//console.log(bb);  //error

{
  const consta = 10;
  console.log(consta); //10
}
//console.log(consta);  //error

//function scope

function local(){
  var alocal = 10;
  let blocal = 11;
  const clocal = 12;
  console.log(alocal);  //var, let, const only accessed inside the scope
  console.log(blocal);
  console.log(clocal);
}
local();  //accessed by call the function
// console.log(alocal); //error
// console.log(blocal); //error
// console.log(clocal); //error

//global scope

var abcd = 123;
function myvar(){
  
  console.log(abcd);  //123 by the function call
}
console.log(abcd);  //123
myvar(); //123



let efgh = 11;
function mylet(){
  console.log(efgh);
}
mylet();

const mconst = 14;
function myconst(){
  console.log(mconst);
}
myconst();