const nums = [3, 2, 5, 7, 1, 9, 0, 6, 8, 4];


/* --------------------------------- LENGTH --------------------------------- */
 
const arrLength = nums.length;
console.log(arrLength); // 10


/* --------------------------------- REVERSE -------------------------------- */
const numsReverse = nums.reverse();
console.log(numsReverse); // [4, 8, 6, 0, 9, 1, 7, 5, 2, 3]


/* ---------------------------------- SORT ---------------------------------- */
const numsSort = nums.sort(); // MUTATES 
console.log(numsSort); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


/* ---------------------------------- JOIN ---------------------------------- */
const numsJoin = nums.join('-'); 
console.log(numsJoin); // 0-1-2-3-4-5-6-7-8-9


/* --------------------------------- FILTER --------------------------------- */
const numEven = nums.filter(num => num % 2 == 0); // [0, 2, 4, 5, 8]
console.log(numEven);

/* ----------------------------------- MAP ---------------------------------- */
const numSqure = nums.map(num => num * num); // [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(numSqure);

