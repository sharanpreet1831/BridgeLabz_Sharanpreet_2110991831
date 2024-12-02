                                                          /// SET 
// Collection of unique data 
// store any data but unique 

let myarray =[1,2,3,4,4]
let obj = new Set(myarray);
console.log(obj);

obj.add(5);
console.log(obj);

var obj1 = {name : "Sharan"};
obj.add(obj1)
console.log(obj)


// for checking item is present or not in set 

console.log(obj.has(1));
console.log(obj.has(10));

// loop on set 
for (let x of obj ){
    console.log(x);
}

obj.forEach((element )=>{
    console.log(element)
})


// for clear set ;
obj.clear();
console.log(obj)

