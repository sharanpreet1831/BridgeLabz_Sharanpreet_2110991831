// function statement 
// Function which is started with function keyword 
function add (num1 , num2 ){
    return num1 + num2;
}
let result = add (1 ,2 );
console.log (result)


// Function Expression 
/// Function which is storted in variable 
 var myfunction = function half(num1 , num2) { 
    return ((num1+num2)/2);
 }
 let newresult = myfunction(2,2 );
 console.log(newresult);

 // Arrow function 

var odd = (num1, num2 )=>{
    return num1 + num2 ;
}
let res = odd(1,2);
console.log(res);


