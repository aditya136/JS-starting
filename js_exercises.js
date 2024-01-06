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

fizzbuzz(8)*/





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






