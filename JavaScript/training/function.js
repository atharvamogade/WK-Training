// Uncomment the function.js script from index.html


/* ----------------------- FUNCTION WITH NO PARAMETERS ---------------------- */

function printHello() {
    console.log("Hello!");
}
printHello();



/* ------------------------- FUNCTION WITH PARAMETER ------------------------ */

function printNum(num) {
    console.log(num);
}
printNum(9);


/* --------------------------- FUNCTION EXPRESSION -------------------------- */

const sumTwo = function(num1, num2) {
    return num1 + num2;
}
console.log(sumTwo(2, 4));

/* ----------------------------- ARROW FUNCTION ----------------------------- */

const arrowSQRE = (num) => num * num;

console.log(arrowSQRE(9))