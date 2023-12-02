let x = 802384
const z = "arik"

console.log(typeof x)


//boolean type

let booli = true
console.log( typeof booli)



//Length

let info = "Aditya Banerjee"
console.log(info.length)







//variable
// Cannot be a reserved Keyword
// should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

//  Upper Case(A,B, C) & Lower Case(a, b, c)


// let nameofProgrammer = "Virus"


// console.log(nameofProgrammer)

// const rollNumber = 9
// // rollNumber = 10

// console.log(rollNumber)



// Primitive types

// Boolean
// String
// Number
// undefined
// null
// Symbol

let nameOfStudent = "Aninda"
let isPresent = false
let rollNumber = 9
let isAttentive = null

// null -> memory allocated
// undefined -> memory not allocated

// Reference types
// Object
// Array
// function


// Object
// key value pair
let student = {
    studentName: "Aninda",
    isPresent: true,
    rollNumber: 15
}

// Property access
// Dot notation
console.log(student.isPresent)

// Bracket notation
let selectedProperty = "rollNumber"
console.log(student[selectedProperty])

// Human
// property
// 2 hands, 2 legs, 1 head, 2 eye
// method
// walk(), run(), eat(), talk()









// Array 
// list of data

let notunArray = ["Aninda", "Apurbo"]
// console.log(notunArray[])

notunArray[2] = "Arko"
notunArray[0] = "Aditya"
notunArray[3] = {}
// console.log(notunArray.length)


// let userInput = prompt("Enter your name")

// console.log(userInput)


// performs
function greet(fname, lname){
    console.log("Hello " + fname + " " + lname)
}

// greet("Aninda", "Reza")

// greet("Samiul", "Muztaba")

// Calculate

function square(num){
    let result = num * num
    return result
}


console.log(square(4))
let value = square(4)