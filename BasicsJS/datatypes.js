var a = 1;      //var keyword
var a = 2;      //re-assign with var
a = 3;          //re-assign without var
console.log(a); //3

let b = 11;
//let b = 12; //not able to redeclare a let keyword
b = 13;       //able to re-assign a value without a let keyword
console.log(b); //13

const c = {'Name':"Balaji N",'Age':23}; //const disn't re-declare and re-assign re assign modify only a json format object values only
console.log(c);
c.Name = "Sheik Dawoodu";
console.log(c);
c.Age = 30;
console.log(c);
