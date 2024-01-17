// returning a random number between two values
function randomNumber(min = 1, max = 10) {// in case just one value is received max will be filled with 10
    // Math.floor round the number down, you can also use Math.round
    return Math.floor(Math.random() * (max - min) + min)
    // Here Math.random is generating a value between 0 and 1 which will be multiplied for the sum of the maximum value and minimum value after this is added with the minimum value
}
vmin = 1
vmax = 10
console.log(randomNumber(vmin, vmax))



let f = function(value) { // variables can receive functions --> AFTER THAT LEARN ABOUT ARROW FUNCTION
    return value * 2
}
console.log(f(4))



function factorial(num) { // calculating a number's factorial and showing its formula
    let fac = ``
    let res = 1
    for (i = num ; i > 1 ; i--) {
        fac += i + ` * `
        res *= i
    }
    console.log(`${fac} 1 = ${res}`)
}
factorial(5)



function factorialR(n) { // RECURSIVITY IN FUNCTIONS, functions that can call themselves
    if (n == 1) {
        return 1
    } else {
        return n * factorialR(n-1)
    }
}
console.log(factorialR(5))