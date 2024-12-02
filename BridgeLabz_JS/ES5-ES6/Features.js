/// let var const 
// Difference between let var const 


// var : Block scope 
//     : redfeclaration 
//     : Reassign 
//     : Hositing 


// let  : Function scope 
//      : Reaasign 
//       : no hoisting 


// Const   : Functional Scope 

/// Arrow Function 

var newfun = (num , num2 ) =>{
    return num + num2 ;

}
let newres = newfun(2,2);
console.log(newres);

// difference between normal function vs arrow function 




// Default parameters 

var funn = function multiply ( num1 = 1 , num2 = 5 ){
    return (num1 * num2) ;

}
let myres = funn(5);
console.log(myres);


//  mutli line Strinfg 

let Str = `hello 
from sharanpreet mac's `;
console.log (Str )


//  Template Literals 
 let firstname = "sharan";
 let lastname = "preet ";

 console.log(`hello my name is ${firstname} ${lastname}`);


 // Destructing 

 let fruit = ["apple" , "mango"];
 let [a,b] = fruit;
 console.log(a,b);

 let person = { name : "sharan ", rollno : 1831};
 let {name ,rollno} = person;
 console.log (rollno);


 // promise 



 // classes 




