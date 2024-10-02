//                                                              PART ONE
//                              loop thru numbers 1 - 100

//              original answer
for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 != 0)) {
        console.log("Fizz")
    } else if ((i % 3 != 0) && (i % 5 == 0)) {
        console.log("Buzz")
    } else if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("Fizz Buzz")
    } else {
        console.log(i)
    }
}

//              Ian's smarter than me
for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("Fizz Buzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {console.log(i)}
}


//                              find next prime from arbitrary number

let n = Math.floor(Math.random() * 101)
let isPrime = false

while (isPrime === false) {

    if (n % 2 == 0) {
        console.log(`${n} is even.`)
        n++
    } else if ((n % 3 == 0) | (n % 5 == 0) | (n % 7 == 0) | (n % 9 == 0)) {
        console.log(`${n} is odd.`)
        n++
    } else {
        console.log(`${n} is Prime!`)
        isPrime = true
    }
}

//                              CSV string processing

const CSVString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

let columnHeaders = ""
let row1 = ""
let row2 = ""
let row3 = ""
let row4 = ""
let rowsFinished = 0

for (let i = 0; i < CSVString.length; i++) {

    if (CSVString[i] == "\n") {
        rowsFinished++
        continue
    }

    if (rowsFinished === 0) {

        if (CSVString[i] == ",") {
            columnHeaders += " * "
        } else {
            columnHeaders += CSVString[i]
        }

    } else if (rowsFinished === 1) {
        
        if (CSVString[i] == ",") {
            row1 += " * "
        } else {
            row1 += CSVString[i]
        }

    } else if (rowsFinished === 2) {

        if (CSVString[i] == ",") {
            row2 += " * "
        } else {
            row2 += CSVString[i]
        }

    } else if (rowsFinished === 3) {

        if (CSVString[i] == ",") {
            row3 += " * "
        } else {
            row3 += CSVString[i]
        }

    } else {

        if (CSVString[i] == ",") {
            row4 += " * "
        } else {
            row4 += CSVString[i]
        }
    }
}

console.log(columnHeaders + "\n")
console.log(row1 + "\n")
console.log(row2 + "\n")
console.log(row3 + "\n")
console.log(row4)