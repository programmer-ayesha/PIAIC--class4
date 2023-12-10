"use strict";
//FUNCTION
//EX # 1
function greet() {
    console.log("Hello Hamzah");
}
function sum() {
    console.log(2 + 2);
}
greet();
sum();
greet();
//EX # 2
function greeting(name) {
    console.log("Hello", name);
}
greeting("Hamzah");
greeting("Ali");
//EX # 3
//            5            10
function addition(num1, num2) {
    // console.log(num1 + num2)
    return num1 + num2;
}
let ans = addition(5, 10); // 15
function multiply(num1) {
    console.log(num1 * 2);
}
//15
multiply(ans);
