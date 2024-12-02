// weak map 

let wm = new WeakMap () ;
var obj1 = { "name" : "Sharan "};
var obj2 = {};
wm.set(obj1);
wm.set(obj2)
console.log(wm.has(obj1))