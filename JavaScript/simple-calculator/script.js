'use strict';
// console.log('connected');

/* ----------------------------- SELECT ELEMENTS ---------------------------- */

const key = document.querySelectorAll('.key');
let currentCalculation = document.querySelector('.calculation');
let answer = document.querySelector('.answer');
const keyEquals = document.querySelector('.key--equals');
const keyClear = document.querySelector('.key--clear');

/* ------------------------ CLEAR SCREEN FUNCTION [C] ----------------------- */

const clearScreen = function() {
    currentCalculation.textContent =  '';
    answer.textContent = '';
}
clearScreen(); //Clears screen at first

console.log(currentCalculation);

/* for (let i = 0; i < 19; i++) {
    key.addEventListener('click', function () {
        console.log('key clicked');
        const text = key.querySelector('.key-title').textContent;
        console.log(text);
    });
} */


key.forEach(key => {
    key.addEventListener('click', function () {
        console.log('key clicked');

        // Getting content of the KEY
        const keyContent = key.querySelector('.key-title').textContent;

        // Displaying KEY content on Live text area
        currentCalculation.textContent += keyContent;
        /* if (keyContent === '+' || keyContent === '-' || keyContent === '*' || keyContent === '/') {
            if(currentCalculation.textContent[currentCalculation.textContent.length - 2] !== '+') {
                currentCalculation.textContent += keyContent;
            }
        } else {
            currentCalculation.textContent += keyContent;
        } */

        // Calculating and Getting Colculation
        const finalAnswer = Number(eval(currentCalculation.textContent));
        answer.textContent = String(finalAnswer).includes('.') ? finalAnswer.toFixed(2) : finalAnswer;

    });
});

keyEquals.addEventListener('click', function() {
    currentCalculation.textContent = answer.textContent;
    answer.textContent = '';
});

keyClear.addEventListener('click', clearScreen);

