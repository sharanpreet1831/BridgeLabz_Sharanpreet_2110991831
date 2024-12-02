                                       ///MAP
// Value store in key value pair 

let mymap = new Map([
    ["a1", "Sharan"],
    ["a2", "preet "],
]);
mymap.set("a2", "pannu");
console.log(mymap);

//mymap.delete("a2")
console.log(mymap); 

console.log(mymap.get("a2"));


// loop on map 
for (let [key , value ] of mymap){
    console.log(`key ${key}   ,  value ${value}`) 
   
}

// for each loop 
mymap.forEach((key , value )=>{
    console.log(key ,value)
})
