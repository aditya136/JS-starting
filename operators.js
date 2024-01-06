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