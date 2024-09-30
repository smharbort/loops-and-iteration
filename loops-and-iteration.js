/*

Okay, so, there are a few different types of for & while loops.

                                For loops:
                for

for (initialization; condition; afterthought) {
    execute
}

                for...in

for (const i in str) {
    execute
}

                for...of

for (const c of str) {
    execute
}

                                While loops:
                while

while (condition)

                do...while



                labeled whiles



*/

//                                                              PART ONE
// loop thru numbers 1 - 100

// original answer
/* for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 != 0)) {
        console.log("Fizz")
    } else if ((i % 3 != 0) && (i % 5 == 0)) {
        console.log("Buzz")
    } else if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("Fizz Buzz")
    } else {
        console.log(i)
    }
} */

// Ian's smarter than me
/* for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("Fizz Buzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {console.log(i)}
} */


// find next prime from arbitrary number

let n = Math.floor(Math.random() * 101);
let isPrime = false;

while (isPrime === false) {

    if (n % 2 == 0) {
        console.log(`${n} is even.`)
        n++
    } else if ((n % 3 == 0) | (n % 5 == 0) | (n % 7 == 0) | (n % 9 == 0)) {
        console.log(`${n} is odd.`)
        n++
    } else {
        console.log(`${n} is Prime!`);
        isPrime = true;
    }
}