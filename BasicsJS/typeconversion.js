/*

    Strings to Numbers - String(value) : Converts the given value to a string.
    Numbers to Strings - Number(value) : Converts the given value to a number.
    Dates to Numbers   - Boolean(value) : Converts the given value to a boolean.
    Numbers to Dates
    Boolean to Numbers
    Numbers to Boolean - parseInt(value) : Converts the given value to an integer, parseFloat(value) : Converts the given value to a floating-point number.
*/

var string = "13011";         //if am use a 'dvfdhb' it returns NaN
var number = Number(string);  //string to number
console.log(number);          //13011

var number = 13011;         
var string = String(number);
console.log(string);          //13011 as a string

var date = new Date();
var number = Number(date);  //getTime, getDay, GetFullYear
console.log(number);  //This date compiled at 14-09-2023 - returns 8

var boolean = true;  //false - 0 , true - 1
var number = Number(boolean);
console.log(boolean); 

a = ['5'];
console.log(a,typeof a);
a=Number(a);
console.log(a,typeof a);

a = '11.11';
console.log(parseInt(a));   //string number converts to int lose some value
console.log(parseFloat(a)); //string number to float not lose

//type coercion

a = Number("2");  //explicit conversion
b = Number("3");
console.log(a+b); //5

a = true;        //implicit conversion
b = true;
console.log(a+b); //0+1 = 1