const inputBox = document.querySelector('input');
const submitButton = document.querySelector('.submit');

const elGrade = document.querySelector('.grade');

const calGrade = function() {
    const marks = Number(inputBox.value);

    if (marks >= 90) elGrade.textContent = 'Grade A';
    else if (marks >= 80) elGrade.textContent = 'Grade B';
    else if (marks >= 70) elGrade.textContent = 'Grade C';
    else if (marks >= 60) elGrade.textContent = 'Grade D';
    else if (marks >= 50) elGrade.textContent = 'Grade E';
    else if (marks < 50) elGrade.textContent = 'Grade F';
    else {
        console.log(marks);
        alert("Invalid input");

    }
}

submitButton.addEventListener('click', calGrade);

