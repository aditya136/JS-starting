// let x = 802384
// const z = "arik"

// console.log(typeof x)


// //boolean type

// let booli = true
// console.log( typeof booli)



// //Length

// let info = "Aditya Banerjee"
// console.log(info.length)







// //variable
// // Cannot be a reserved Keyword
// // should be meaningful
// // Cannot start with a number (1name)
// // Cannot contain a space or hyphen (-)
// // Are case-sensitive

// //  Upper Case(A,B, C) & Lower Case(a, b, c)


// // let nameofProgrammer = "Virus"


// // console.log(nameofProgrammer)

// // const rollNumber = 9
// // // rollNumber = 10

// // console.log(rollNumber)



// // Primitive types

// // Boolean
// // String
// // Number
// // undefined
// // null
// // Symbol

// let nameOfStudent = "Aninda"
// let isPresent = false
// let rollNumber = 9
// let isAttentive = null

// // null -> memory allocated
// // undefined -> memory not allocated

// // Reference types
// // Object
// // Array
// // function


// // Object
// // key value pair
// let student = {
//     studentName: "Aninda",
//     isPresent: true,
//     rollNumber: 15
// }

// // Property access
// // Dot notation
// console.log(student.isPresent)

// // Bracket notation
// let selectedProperty = "rollNumber"
// console.log(student[selectedProperty])

// // Human
// // property
// // 2 hands, 2 legs, 1 head, 2 eye
// // method
// // walk(), run(), eat(), talk()









// // Array 
// // list of data

// let notunArray = ["Aninda", "Apurbo"]
// // console.log(notunArray[])

// notunArray[2] = "Arko"
// notunArray[0] = "Aditya"
// notunArray[3] = {}
// // console.log(notunArray.length)


// // let userInput = prompt("Enter your name")

// // console.log(userInput)


// // performs
// function greet(fname, lname){
//     console.log("Hello " + fname + " " + lname)
// }

// // greet("Aninda", "Reza")

// // greet("Samiul", "Muztaba")

// // Calculate

// function square(num){
//     let result = num * num
//     return result
// }


// console.log(square(4))
// let value = square(4)























// Exercise 1: 
// Speed Limit = 70   ---> output: ok
// 5 -> 1 point
// Math.floor(1.4)
// 12 points -> suspended ---> output: License Suspended

// checkSpeed(200) // ok
// checkSpeed() // 1 point
// checkSpeed(200) // License suspended

//Solution of this exercise:




// Exercise 2:
// Falsy values:
// undefined
// null
// ""
// false
// 0
// NaN

// let isActive = ""
// if(isActive) console.log("hello")

// let myArray = ['', 2, 3,10,"hello", undefined, false]

// countTruthy(myArray) // 4

// function countTruthy(array){}


// Exercise 3:

// Show All the "string properties" of an object

// const movie = {
//     title: "a",
//     releaseYear: 2023,
//     rating: 4.5,
//     director: "b"
// }

// function showProperties(obj){
//     // Code
// }
// showProperties(movie)


// Exercise 4: 
// Sum of Multiples of 3 and 5

// Multiples of 3: 3, 6, 9,
// Multiples of 5: 5, 10

// function sum(limit){

// }
// console.log(sum(10))


// FizzBuzz

// function fizzBuzz(num) {
//     if(typeof num !== "number"){
//         console.log("It's not a number")
//     } else if( num % 3 === 0 && num % 5 === 0){
//         console.log("FizzBuzz")
//     } else if(num % 5 === 0){
//         console.log("Buzz")
//     } else if(num % 3 === 0){
//         console.log("Fizz")
//     }
// }

// fizzBuzz(15) 

// function showNumber(limit){
//     for(let i = 1; i<=limit; i++){
//         if(i%2 === 0){
//             console.log(i, "Even")
//         } else {
//             console.log(i, "Odd")
//         }
//     }

// }

// showNumber(10)
// 0 "EVEN"
// 1 "ODd"



// Basic

// Objects are collections of key-value pairs
// Purpose: Group related variables
// let radius = 1;
// let x = 1;
// let y = 1;


// Object literal syntax
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function (){
//         console.log("draw")
//     }
// }


// Object-oriented Programming (OOP)
// In OOP, a function inside an object is called Method


// circle.draw()

// Factory Functions
// If we have logic inside an object, we need a different way of constructing an object
// Then we need factory function

// function createCircle(radius){
//     return {
//         radius,
//         draw(){
//             console.log("Draw")
//         },
//     }
// }

// function createCircle(radius){
//     return {
//         radius ,
//         draw: function(){
//             console.log("draw")
//         }
//     }
// }


// let newCircle = createCircle(10)

// let againNewCircle = createCircle(15)

// console.log(newCircle)
// console.log(againNewCircle)

// {}
// factory function


// constructor function


// Camel Notation: oneTwoThree
// Pascal Notation: OneTwoThree

// function Circle(radius){
//     this.radius = radius,
//     this.draw = function(){
//         console.log("draw")
//     }
// }
// let circle1 = new Circle(10)
// let xyz = {}
// xyz.radius = 10
// xyz.draw = function(){
//     console.log("draw")
// }

// When we use "new" operator, three things happen:
// 1. it creates an empty js object
// 2. it will point "this" to this empty object
// 3. Finally it will return the new object.


// console.log(circle1)
// "this" is a reference to the object, that is executing this piece of code.
// for now imagine this is an empty object({})


// Dynamic Nature of Objects
// const circle = {
//     radius: 1
// }

// circle = {}

// circle.color = "red"
// circle.draw = function(){}
// circle.radius = 10


// delete circle.color;
// delete circle.draw;

// console.log(circle)

// What kind of constant is cicrle??


// we cannot reassign cicle object, but we can change property.