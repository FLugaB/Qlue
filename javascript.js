/*
## NodeJS, Python, Golang, or PHP

Write a function which, taking in a positive integer n as input, 
returns a string “CIRCLE” if the n is divisible by 2, 
a string “STAR” if the n is divisible by 3, 
a string “CIRCLE STAR” if n is divisible by 2 and 3, and 
return null if n is divisible by neither 2 and 3.

### sample expected output: 


getShape(5); // ⇒ Null

getShape(6); // ⇒ CIRCLE STAR

getShape(9); // ⇒ STAR

*/

const getShape = (value) => {

    if (typeof value !== 'number' | value < 0) return { msg: "Wrong input, taking in a positive integer n as input" }

    if (value % 2 === 0 && value % 3 === 0) {
        return `CIRCLE STAR`
    } else if (value % 3 === 0) {
        return `STAR`
    } else if (value % 2 === 0) {
        return `CIRCLE`
    } else {
        return null
    }

}

console.log(getShape([])) // false input
console.log(getShape('1')) // false input
console.log(getShape({1: '1'})) // false input
console.log(getShape(-1)) // false input

console.log(getShape(5)); // ⇒ Null
console.log(getShape(6)); // ⇒ CIRCLE STAR
console.log(getShape(9)); // ⇒ STAR
console.log(getShape(2)); // ⇒ CIRCLE