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