/* ----------------------------- DECALRING ARRAY ---------------------------- */

const evenNums = [2, 4, 6, 8, 10, 12, 14];
console.log(evenNums);


/* ----------------------------- ITERATING ARRAY ---------------------------- */

// FOR OF LOOP

for (const evenNum of evenNums) {
    console.log(evenNum);
}

console.log(evenNums.length); // 7

// FOR LOOP
for (let i = 0; i < evenNums.length; i++) {
    const element = evenNums[i];
    console.log(element);
}