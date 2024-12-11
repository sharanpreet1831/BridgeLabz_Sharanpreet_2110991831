let mymap = new Map([
    ["a1","Sharan"],
    ["a2","preet"]
]);
mymap.set("a2","daman")
console.log(mymap.get("a2"));
console.log(mymap)
// for (let [key,value] of mymap){
//     console.log(key)
// }
mymap.forEach((value,key)=> {
    console.log(`${value} => ${key}`);
})