//POP METHOD
//REMOVE LAST ELEMENT IN ARRAY

let menu = ["Kofta", "Kheer", "Biryani", "gajar ka halwa"];

let myFirstPopped = menu.pop();

console.log(menu)

//POP WILL GIVE RETURN VALUE LAST ELEMENT
console.log(myFirstPopped);


//PUSH METHOD
//PUSH ADD LAST ELEMENT  IN ARRAY

let pushedReturn = menu.push("Chicken Tikka", "Chicken Karahi");

//PUSH RETURN LENGHT
console.log(pushedReturn);

menu.pop();

console.log(menu);

//SHIFT() REMOVE FIRTS ELEMENT IN ARRAY AND SHIFT OTHER ELEMENT

let shiftedElement = menu.shift();

// shift() method returns the value that was "shifted out".
console.log(shiftedElement);

// unshift() method adds a new element start to an array 

let len  = menu.unshift("Chicken Tikka");

// unshift() method returns the new array length.
console.log(len);

//splice method
//splice anywhere add element
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let a = fruits.splice(2, 0, "Lemon", "Kiwi");

//
console.log(a);
console.log(fruits);

//SLICE METHOD
//slice() method slices out a piece of an array.
//Example:
const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

//The slice() method creates a new array.
const citrus = fruit.slice(1); // [Orange,Lemon,Apple,Mango]

