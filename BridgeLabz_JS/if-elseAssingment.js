const prompt = require('prompt-sync')(); // Importing prompt-sync module for user input

// Q1 
var arr = [];
for (var i =0 ; i< 5 ; i++){
    arr[i]=Math.floor((Math.random()*900)+100);
}

console.log(arr);
console.log(`Minimun number ${Math.min(...arr)}`)
console.log(`Maximum  number ${Math.max(...arr)}`)

//Q3
function LeapYearOrNot(year ){
    if ((year %4 === 0 && year % 100 !== 0 )|| year % 400 === 0){
        console.log("leap year ");
    }
    else {
        console.log("not leap year ")
    }
}
LeapYearOrNot(2024)

//Q4 
function HeadOrTail(){
    var number = Math.random();
    const hold = 0.5 ;
    if (number > hold ){
        console.log("head")
    }
    else {
        console.log("Tail");
    }
}
HeadOrTail();

// Q5 
var randamnumber =Math.floor(Math.random()*10);
if (randamnumber === 0 ) {
    console.log("Zero")
}
else if (randamnumber === 1 ) {
    console.log("One")
}
else if (randamnumber === 2 ) {
    console.log("Two")
}
else if (randamnumber === 3 ) {
    console.log("Three")
}
else if (randamnumber === 4 ) {
    console.log("Four")
}
else if (randamnumber === 5 ) {
    console.log("Five")
}
else if (randamnumber === 6 ) {
    console.log("Six")
}
else if (randamnumber === 7 ) {
    console.log("Seven")
}
else if (randamnumber === 8 ) {
    console.log("Eight")
}
else if (randamnumber === 9 ) {
    console.log("Nine")
}
else {
    console.log("not valid ")
}


//Q6
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let num = parseInt(prompt("Enter a number (1-7): "));

console.log(weekdays[num-1]);

//Q7
let number1 = parseInt(prompt("enter a number like (1 , 10 , 100 , 1000 ) : "));
if (number1 === 1) {
    console.log("Unit");
} else if (number1 === 10) {
    console.log("Ten");
} else if (number1 === 100) {
    console.log("Hundred");
} else if (number1 === 1000) {
    console.log("Thousand");
} else if (number1 === 10000) {
    console.log("Ten Thousand");
} else if (number1 === 100000) {
    console.log("Hundred Thousand");
} else if (number1 === 1000000) {
    console.log("Million");
} else {
    console.log("Invalid input! Please enter a valid number (1, 10, 100, 1000, etc).");
}

//Q8
let a = parseFloat(prompt("Enter the value of a: "));
let b = parseFloat(prompt("Enter the value of b: "));
let c = parseFloat(prompt("Enter the value of c: "));

let op1 = a + b * c;
let op2 = a % b + c;
let op3 = c + a / b;
let op4 = a * b + c;

let max = Math.max(op1, op2, op3, op4);
let min = Math.min(op1, op2, op3, op4);

console.log(`Results of operations:
1. a + b * c = ${op1}
2. a % b + c = ${op2}
3. c + a / b = ${op3}
4. a * b + c = ${op4}`);

console.log(`Maximum value: ${max}`);
console.log(`Minimum value: ${min}`);
