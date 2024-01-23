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



























 

// Functions are Objects

// function Circle(radius){
//     this.radius = radius,
//     this.draw = function(){
//         console.log("Draw")
//     }
// }

// const circle = new Circle(10)

// const str = new String(23)
// console.log(str.length)

// Circle.name
// Circle.length
// new Function()


// Value vs Reference Types

// let x = 10;
// let y = x;
// x = 20;

// Only the values are copied, so they are independent of each other
// console.log(x)
// console.log(y)

// let arko = {
//     value: 10,
// }
// let supto = arko
// 023947x6

// arko.value = 20


// Primitives are copied by their value
// Objects are copied by their reference

// Another Example
let numberObj = {
    value: 10
};

function increase(obj){
    obj.value++
}

increase(numberObj)
console.log(numberObj)
// Same thing with obj