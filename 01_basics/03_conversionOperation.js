let score = "33a";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log("______________________________");


let score1 = null;

console.log(typeof score1);

let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

console.log("______________________________");

let score2 = undefined;

console.log(typeof score2);

let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);


console.log("______________________________");


let score3 = true;

console.log(typeof score3);

let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

console.log("______________________________");

let score4 = "Swati";

console.log(typeof score4);

let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4);
console.log(valueInNumber4);


/* 
 "33" => 33
 "33a" => NaN
 true => 1; false => 0
 string => NaN
*/

console.log("-------------------------------------------");

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

/* 
 1 => true;  0 => false
 ""=> false
 string => true
*/

console.log("-------------------------------------------");

let AnyNumber = 22;

let StringNumber = String(AnyNumber);

console.log(typeof StringNumber);
console.log(StringNumber);

