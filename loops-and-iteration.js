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

for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("Fizz Buzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {console.log(i)}
}


// find next prime from arbitrary number

let n = Math.floor(Math.random() * 101);

