// REFERENCE TYPE 
//: OBJECT
// : ARRAY 
// : FUNCTION 

let arr = [1,2,3,4];
console.log(arr);

// push  : add element in end 
arr.push(5);
arr.push(6)
console.log(arr);

// pop : remove element from end 
arr.pop();
console.log(arr);

// shift : remove element in the starting of the array 
arr.shift();
console.log(arr);

//unshift : add element in the starting of the array 
arr.unshift(0);
console.log(arr);

//map 
arr.map((number)=>{
    return (number*number);

})



