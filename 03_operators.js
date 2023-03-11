// OPERATORS

// typeof
const num = 5;
// console.log(typeof num)

// arithmetic
// +, -, *, /, %, **, ++, --
const a = 10;
const b = 5;

// console.log(a + b); // 15
// console.log(a - b); // 5
// console.log(a * b); // 50
// console.log(a / b); // 2
// console.log(a % b); // 0
// console.log(5 % 2); // 1
// console.log(a ** b); // 100000
// a^b <- a**b

// ++ --
let d = 1;
d++; // d = d + 1
// console.log(d);

let e = 7;
e--;
e--;
// console.log(e);

// assignment
let x = 7;
// x += 5; // x = x + 5
x -= 3; // x = x - 3
// *=, /=, **=, %=
// console.log(x)

// comparision
// // ==, ===
// const num1 = 5;
// const num2 = 5;
const str = "5"
// console.log(num1 == str) // true
// console.log(num1 === str) // false

// == <- only checks for value, not the type
// === <- checks for both value and type

// recommended: ===

// == opposite -> !=
// === opposite -> !==

// // >, < >=, <=
// console.log(5 > 4)
// console.log(5 < 4)
// console.log(7 >= 8)
// console.log(6 <= 6)

// ternary
// condition ? is true : is false
const num1 = 5;
const num2 = 7;

const greater = num1 > num2 ? num1 : num2;
console.log(greater)

// logical
// &&, ||, !
// console.log(true && true) // true
// console.log(true && true && false) // false
// console.log(num1 > num2 && num2 < 5)
console.log(!true)
