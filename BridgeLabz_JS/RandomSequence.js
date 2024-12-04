// Q1 Random Function Math.floor(Math.random() * Digit. 
var n = Math.floor(Math.random() *10 );
console.log(`random number ${n}`);


//Q2 Use Random to get Dice Number between 1 to 6 
var diceNumber = Math.floor((Math.random() * 5 ) +1) 
console.log(`dicenumber ${diceNumber}`);


//Q3 
var sumOfTwoDice = Math.floor((Math.random() * 12 ) + 1) 
console.log(`sum of two number ${sumOfTwoDice}`)

//Q4  Write a program that reads 5 Random 2 Digit values , then find their sum and the average cle

var arr = [];
for (var  i = 0 ; i < 5 ; i++ ){
    arr[i] = Math.floor(Math.random() *10 );
}
for (let  ans of arr ){
    console.log(`arr answer ${ans}`);
}