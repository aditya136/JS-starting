/*Exercise - 1

maximum of two numbers

function maximum(num1, num2){
    // code goes here
    if(num1 > num2) {
        return num1
    }
    else {
        return num2
    }
  
    return num1 > num2 ? num1 : num2
}

let maxValue = maximum(500, 30)

console.log(maxValue)*/



/*Exercise 2 - Landscape or portrait
function isLandscape(width, height){
    // if(width > height) return true
    // else return false

    // return width > height ? true : false

    return width > height
}

console.log(isLandscape(300, 200))*/




/*Exercise 3 - FizzBuzz
Divisible by 3 => Fizz
Divisible by 5 => Buzz
Divisible by both 3 and 5 => FizzBuzz
Not divisible by 3 or 5 => input
Not a number => "Not a number"

//Solution of FizzBuzz
function fizzbuzz(num){
    if(typeof num !== "number"){
        console.log("It's not a number")
    } else if(num % 3 === 0 && num % 5 === 0){
        console.log("FizzBuzz")
    } else if(num % 5 === 0){
        console.log("Buzz")
    }  else if (num % 3 === 0){
        console.log("Fizz")
    }
}

fizzbuzz(15)*/





/*Exercise 4- Even and odd number

if limit is 6 then:
Output: 
0 "Even"
1 "ODD"
2 "Even"
3 "ODD"
4 "Even"
5 "ODD"
6 "Even"

Solution of Even and odd number problem
function my_number(input){
    for(let i = 0; i <= input; i++){
        if(i % 2 === 0){
            console.log(i + ' ' + ' "Even" ')
        }
        else{
            console.log(i + ' ' + ' "ODD" ')
        }
    }
}

my_number(100)*/






// Exercise 5:
// Show All the "string properties" of an object

//Solution of the problem
// const movie = {
//     title: "a",
//     releaseYear: 2023,
//     rating: 4.5,
//     director: "b"
// }

// for(const value in movie){
//     if(movie.hasOwnProperty(value)){
//         if(typeof movie[value] === "string")
//         console.log(movie[value]);
//     }
// }
































// Exercise 1: 
// Speed Limit = 70   ---> output: ok
// 5 -> 1 point
// Math.floor(1.4)
// 12 points -> suspended ---> output: License Suspended

// checkSpeed(200) // ok
// checkSpeed() // 1 point
// checkSpeed(200) // License suspended

//Solution of this exercise:

// let i = 0
// function speed(car_speed){
//     car_speed = Math.floor(car_speed)
//     if(car_speed <= 70){
//         console.log("Ok")
//     }
//     if(car_speed >= 200){
//         console.log("License suspended");
//     }
//     // for(let i = car_speed; i > 70; i += 5){
//     // console.log(i);
//     // if(i === 100){
//     //     break
//     // }
//     // if(i % 5 === 0){
//     //     for(let i = 1; i < 20; i++){
//     //         console.log(i + " " + "point");
//     //     }
//     // }
    
// }

// speed(70)





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

// //Solution of this problem 
// function count_truthy(my_array){
//     for(let i of my_array){
//         if(i) console.log(i.length);
//     }
// }

// count_truthy(["adi", "", 24.3])










// Exercise 4: 
// Sum of Multiples of 3 and 5
// Multiples of 3: 3, 6, 9,
// Multiples of 5: 5, 10

//Solution of the problem
// function sum(no){
//     for(let i = 1; i <= no; i ++){
//         if(i % 3 === 0 || i % 5 === 0){
//             console.log(i);
//         } 
//     }
// }

// sum(10)