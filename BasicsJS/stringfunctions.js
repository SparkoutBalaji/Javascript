let first_name="  BALAJI";
let last_name="N";

//Concatenation
let c=first_name+" "+last_name;
console.log("Concatenation : "+c);

//concat
c=first_name.concat(' ',last_name);
console.log("Concat : "+c);

//append
c="BALAJI ";
c+="N";
console.log("Append : "+c);

//Escaping
c='Balaji is a \'Laravel\' Developer';
console.log(c);

//Length
c=first_name.length;
console.log("Length : "+c);

//Change Case
c=first_name.toUpperCase();
console.log("Uppercase : "+c);
c=first_name.toLowerCase();
console.log("Lowercase : "+c);

c=first_name.indexOf('J');
console.log("indexOf J : "+c);

c=first_name.lastIndexOf('N');
console.log("lastIndexOf N : "+c);

c=first_name.charAt(1);
console.log("charAt 1 : "+c);

c=first_name.charCodeAt(1);
console.log("charCodeAt 1 : "+c);


c=first_name.substr(0,4);
console.log("substr : "+c);

//Substring
let text = "8012964843";

c=text.substring(0,5)
console.log("Substring : "+c);
c=text.substring(3);
console.log("Substring : "+c);
c=text.substring(4,2);
console.log("Substring : "+c);

//Slice
c=text.slice(0,5);
console.log("slice : "+c);
c=text.slice(4,2);
console.log("slice : "+c);
c=text.slice(25,30);
console.log("slice Invalid Length : "+c);

//Split
let a="BALAJI_N LARAVEL DEVELOPER";
c=a.split(" ");
console.log("Split : "+c);
console.table(c);

//replace
a="I am a php Developer";
console.log("Before Replace : "+a);
c=a.replace('php','Laravel');
console.log("After Replace : "+c);

//includes
const pets = ['cat', 'dog'];
console.log(pets.includes('cat'));  //true
console.log(pets.includes('rat'));   //false

//trim
a=" BALAJI N ";
console.log("Before Trim : "+a.length);   //10
a=a.trim();                               //used for starting letter before empty space and ending letter empty space remover
console.log("After Trim : "+a.length);    //8

//padStart padEnd
a="5";
a=a.padStart(2,0);
console.log(a);

a="5";
a=a.padEnd(2,0);
console.log(a);

a="1";
a=a.padEnd(4,'PHP');
console.log(a);

//Long literal strings
//Method-1
let longString="BALAJI N "+
"LARAVEL DEVELOPER "+
"SPARKOUT TECH SOLUTIONS "+
"COIMBATORE by (+) ";
console.log(longString);
//Method-2
longString = "BALAJI N \
LARAVEL DEVELOPER \
SPARKOUT TECH SOLUTIONS \
COIMBATORE by (\\) ";
console.log(longString);

