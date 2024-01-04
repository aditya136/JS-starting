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






// // Part 00
// // In JS we have different operators. 
// // with these operators we make expressions ,
// // and with expressions we make algorithms

// // x + y -z +10 expressions

// // Operators:

// // Arithmatic 
// // Assignment
// // Comparison
// // Logical
// // Bitwise

// // Part 01
// // Arithmatic Operators
// // let x = 10;
// // let y = 15;

// // console.log(x + y) 
// // x + y is an expression. 
// // + is an addition operator. It takes two operands. Then makes an expression.
// // An expression is something that produces a value.

// // console.log(x + y)
// // console.log(x - y)
// // console.log(x * y)
// // console.log(x / y)
// // console.log(x % y)
// // console.log(x ** y)

// // Increment (++)
// // let x = 10;
// // console.log(++x)
// // console.log(x++)
// // let z = x++

// // x++;
// // x = x + 1

// // console.log(x)

// // Decrement (--)
// // same as increment
// // console.log(--x)
// // console.log(x--)
// // console.log(x)



// // Part 02 : Assignment Operator
// // =, ++ , --

// // let x = 10;

// // x++;
// // x = x + 1;

// // x = x + 5;
// // x += 5;

// // x = x * 3;
// // x *=3;

// // x = x / 2
// // x /=2



// // Part 03: Comparison Operators

// // let x = 1;

// // Relational
// // console.log(x > 0)
// // const y = x> 0
// // console.log("y : ", y)

// // console.log(x >= 1)

// // console.log(x < 1)
// // console.log(x <= 1)

// // Equality
// // let x = 10
// // console.log(x === 10);
// // console.log(x !== 10);


// // Part 04: Equality Operators
// // Strict Equality (Type + Value)
// // console.log(1 === 1) // true
// // console.log("1" === 1) // false

// // Lose Equality (Value)
// // console.log(1 == 1) 
// // console.log("1" == 1) // true
// // console.log(true == 1) // true
// // console.log(false == 1) // true
// // console.log(false == 0) // true



// // Part 06 : Ternary Operator

// // My favorite
// // If a programmer solves 100 problems he is a "gold" level programmer, otherwise he is a silver level programmar.

// // let problems = 110;

// // let level = problems > 100 ? "gold" : "silver"

// // console.log(level)

// // 80 >    A+
// // 70 >    A
// // else    Pass

// // let problems = 50;

// // let level = problems > 80 ?  "A+" : problems > 70 ? "A" : "Pass"




// // let type = problems > 100 ? "gold" : "silver";

// // console.log(type)


// // Part 07 : Logical Operators

// // Logical AND (&&) 
// // Returns TRUE if both operands are TRUE
// // console.log(true && true)


// // let curiosity = true;
// // let industrious = true;
// // let helpfull = true;
// // let goodDeveloper = curiosity && industrious && helpfull

// // console.log(goodDeveloper)

// // let highIncome = false;
// // let goodCreditScore = true;
// // let eligibleForLoan = highIncome && goodCreditScore
// // console.log(eligibleForLoan)


// // Logical OR (||)
// // Returns true if one of the operands is true

// // let highIncome = true;
// // let goodCreditScore = false;
// // let eligibleForLoan = highIncome || goodCreditScore

// // console.log("Eligible", eligibleForLoan)

// // NOT (!)
// // let applicationRefused = !eligibleForLoan;
// // console.log("Application Refused", applicationRefused)

// // let x = !(-18)
// // console.log(x)
// // falsy, truthy









// Logical Operators with Non-booleans

// false || true
// false || "Aninda"
// false || 1

// Falsy (false) values
// undefined
// null
// 0
// false
// ""
// NaN



// Truthy -> Anything that is not falsy

// false || 1 || 2
// short-circuiting

// Real world example
// let userColor = "";
// let defaultColor = "blue";

// let currentColor = userColor || defaultColor

// console.log(currentColor)


// Operators Precedence
// let x = (3 + 4) * 5

// console.log(x)

//Operator Section :  Final Exercise

// Swapping Variables
// Swapping variable solution
// let a = "red";
// let b = "green"

// let c;
// c = a
// a = b
// b = c


// b = a
// a = b

// console.log("a", a)
// console.log("b", b)
// console.log("C :", c)



// console.log(a) // a should be green
// console.log(b) // b should be red



// Conditional Statements
// 1. if...else
// 2. Switch...case


// 1. if...else
// Hour
// If hour is between 6am and 12pm: Good morning!
// if hour is between 12pm and 6pm: Good afternoon!
// Otherwise: Good Evening

// let hour = 12

// if(hour >= 6 && hour <=12)
//     console.log("Good Morning!")
// else if(hour > 12 && hour <=18)
//     console.log("Good Afternoon")
// else 
//     console.log("Good Evening!")


// if(condition){
//     statement
// }
// else if(anotherCondition){
//     statement
// }
// else if (yetAnotherCondition){
//     statement
// }
// else statement


// 2. Switch...case
// let role = "guest"

// switch(role){
//     case "guest":
//         console.log("Guest User!");
//         break;
//     case "moderator":
//         console.log("Moderator User!");
//         break
//     default:
//         console.log("User not found")
// }

// if(role === "guest") console.log("Guest User")
// else if(role === "moderator") console.log("Moderator User")



 



 

// Use for and while loop to console all the odd/even numbers

// for (let i = 1; i<=10; i++){
//     if(i % 2 ===1) console.log(i)
// }

// let i = 20;
// while(i <= 10){
//     if(i% 2 === 0 ) console.log(i)
//     i++
// }

// do - while loop

// let i = 20
// do{
//     if(i%2 === 0) console.log(i)
//     i++
// } while(i<=10)

// for - in loop

// const teacher  = {
//     name: "Aninda",
//     age: "28"
// }

// let selectedProperty = "age"
// console.log(teacher[selectedProperty])

// for (let key in teacher){
//     // How to get the values?
//     console.log(key, teacher[key])    
// }


// const colors = ["red", "green", "blue"]

// for(let index in colors){
//     console.log(index, colors[index])
// }

// for - of loop

// for (let color of colors){
//     console.log(color)
// }

// Break and continue
// Break -> we jump out of the loop
// continue -> we jump to the next iteration

// let k = 0;
// while(k<= 10){
//     // if(k===5) break
//     if(k%2=== 0){
//         k++;
//         continue;
//     }
//     console.log(k)
//     k++
// }





// function showNumber(limit){

// }
// showNumber(6)

// console.log("ANinda")





// maximum of two numbers

// function maximum(num1, num2){
//     // code goes here
//     if(num1 > num2) {
//         return num1
//     }
//     else {
//         return num2
//     }
  
//     return num1 > num2 ? num1 : num2
// }

// let maxValue = maximum(500, 30)

// console.log(maxValue)

// Use for and while loop to console all the odd/even numbers

// for (let i = 1; i<+10; i++){
//     console.log(i)
// }


// Do- while loop

// let i = 0;
// do {
//     console.log("Hello")
//     i++
// } while(i<=5)


// let index = 1
// while(index <= 5){
//     console.log("Hello While", index)
//     index++
//     console.log("value of index after increment: ", index)
// }

// Exercise - Landscape or portrait
// function isLandscape(width, height){
//     // if(width > height) return true
//     // else return false

//     // return width > height ? true : false

//     return width > height
// }


// console.log(isLandscape(300, 200))


// Exercise - FizzBuzz
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => "Not a number"

//Solution of FizzBuzz
// function fizzbuzz(input){
//     return typeof input === 'number' ? input % 3 === 0 && input % 5 === 0? console.log("FizzBuzz") : input % 3 === 0 ? console.log("Fizz") : input % 5 === 0 ? console.log("Buzz") : console.log(input) : "Not a number"
// }

// fizzbuzz("21")



// Exercise- Even and odd number

// if limit is 6 then:
// Output: 
// 0 "Even"
// 1 "ODD"
// 2 "Even"
// 3 "ODD"
// 4 "Even"
// 5 "ODD"
// 6 "Even"

//Solution of Even and odd number problem
// function my_number(input){
// for(let i = 0; i <= input; i++){
//     if(i % 2 === 0){
//         console.log(i + ' ' + ' "Even" ')
//     }
//     else{
//         console.log(i + ' ' + ' "ODD" ')
//     }
// }
// }

// my_number(100)