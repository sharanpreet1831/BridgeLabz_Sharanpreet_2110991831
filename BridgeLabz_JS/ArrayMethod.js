// length method 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

//Array to string => tostring 
console.log(fruits.toString());

// Array at 
console.log(fruits[2]);

// Array join 
fruits.join("*");
console.log(fruits);

// Array pop() ;
fruits.pop();
console.log(fruits);

// Array push 
fruits.push("==");
console.log(fruits)

// Array shift 
fruits.shift();
console.log(fruits);

// Array unshift
fruits.unshift("my fav fruit ");
console.log(fruits);

//delete 
//delete fruits[0];
//console.log(fruits);

//copyWithin
const newfruits = fruits.copyWithin();
console.log(newfruits);

//Array Flat 
const myArr = [[1,2],[3,4],[5,6]];
const newarr = myArr.flat();
console.log(newarr);