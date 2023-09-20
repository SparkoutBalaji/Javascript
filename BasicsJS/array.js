//Arrays
const arr = [];
arr[0] = {'Name' : 'Balaji N'};
arr[1] = 1007;
arr[2] = "Laravel Developer";
arr[3] = true;
console.log("Array values : ",arr);
console.log("Array elements specific value is : ",arr[0],"Type : ",typeof arr[0]); //number for arr[0], if am use concotenate string plus arr then its return only type not the value

arr.shift();                        //remove the first element value in tha array - shift
console.log("After shift : ",arr);
arr.unshift({'Name' : 'Balaji N'}); //add the first element value in tha array - unshift
console.log("After unshift : ",arr);
console.log(arr[0]);                //{'Name' : 'Balaji N'}

arr.pop();                          //remove final element of the array value - pop
console.log("After pop",arr);
arr.push(true);
console.log("After push : ",arr);   //add the final element value to the array - push
console.log(arr.length);            //total count of the array elements

console.table(arr);                 //display the elements with a table

arr.forEach((value,index)=>{
  console.log("Index : ",index,"Value : ",value,"typeOf : ",typeof value);
});

arr.splice(1,1);                    //for delete the particular element 1 for index value 0 for how many elements after 1
console.log("After delete : ",arr);
const b = arr;
console.log("Array b : ",b);
arr.splice(1,0,1007); //new array assign the arr array elements to this
console.log("After splice add : ",arr);

var reverse = arr.reverse();           //array elements reverse
console.log("Reverse : ",reverse);

var join = arr.join();             //join the all array elements into the single string
console.log("Join : ",join);

var split = join.split(',');       //string element split by the , all the elements in the string value
console.log("Split : ",split);

console.log(arr.splice(1,3));      //copy the elements

console.log(arr);                  //return pending element

