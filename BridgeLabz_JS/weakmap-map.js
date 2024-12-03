// ===============================================
console.warn("MAP")
// ===============================================
let mymap = new Map();
let keystring = "a string ";
let keyobj = {name : " Sharan"}
let keyfunc = function (){};

mymap.set (keystring , "vale associated with key string type ");
mymap.set (keyobj , "vale associated with key object  type ");
mymap.set (keyfunc, "vale associated with key Function type ")


console.log(mymap.size);





// ===============================================
console.warn("WEAKMAP")
// ===============================================
let myweakmap = new WeakMap()
let keyString1 = "a string";
let keyobj1 = {name : "sharan"};

myweakmap.set(keyobj1,  "vale associated with key object  type ");


