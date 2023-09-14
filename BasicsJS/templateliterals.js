let full_name="BALAJI N";
let age="23";
let city="Madathukulam";
let role="Laravel Developer";

let output ="";
output ="<table border='1'><tr><th>Name</th><td>"+full_name+"</td></tr><tr><th>Age</th><td>"+age+"</td></tr><tr><th>City</th><td>"+city+"</td></tr><tr><th>Role</th><td>"+role+"</td></tr></table>";

//es5
output +="<hr><table border='1'>"+
"<tr><th>Name</th><td>"+full_name+"</td></tr>"+
"<tr><th>Age</th><td>"+age+"</td></tr>"+
"<tr><th>City</th><td>"+city+"</td></tr>"+
"<tr><th>Role</th><td>"+role+"</td></tr>"+
"</table>";

full_name="PRASANTH";
age="23";
city="Madathukulam";
role="Laravel Developer";

out =`<hr/>
<table border='1'>
  <tr><th>Name</th><td>${full_name}</td></tr>
  <tr><th>Age</th><td>${age>20?"Greater than 20":"Less than 20"}</td></tr>
  <tr><th>City</th><td>${city}</td></tr>
  <tr><th>Role</th><td>${role}</td></tr>
</table><br/><br/>`;


document.getElementById('output').innerHTML = output;
document.getElementById('out').innerHTML = out;

let input = "";
input = "<p>Name : </p><input type='text' placeholder='I am Input'>";

document.getElementById('input').innerHTML = input;


