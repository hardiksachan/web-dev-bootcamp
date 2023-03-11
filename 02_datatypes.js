// DATA TYPES

// number
let myNum = 5;
let mySecondNum = 7.5;
// console.log(typeof myNum)

// string
let myString = "Hello, world!"
// console.log(typeof myString)

// boolean - true or false
let myBool = true;
let myAnotherBool = false;
// console.log(typeof myBool)

// array
let marks = [85, 73, 96, 65, 71]
// console.log(typeof marks)

//           0    1      2
let myArr = [1, "john", false]
// console.log(myArr[0]) // 1
// console.log(myArr[1]) // john
// console.log(myArr[2]) // false

// object
let myObj = {
    name: "Pranjal",
    rollno: 85,
    age: 18,
    passed: true,
    greeting: myString,
    marks: [75, 85, 96, 74]
}
// console.log(myObj["rollno"]) // myObj.rollno
// console.log(myObj.passed) // myObj["passed"]
// const a = "age"
// console.log(myObj[a]) // myObj["age"]
// console.log(myObj.marks[1]) //85

let arrOfObj = [
    {name:"Nidhi", roll: 21},
    {name:"Dhruv", roll: 28},
]
console.log(arrOfObj[1].roll) // arrOfObj[1]["roll"]

// function