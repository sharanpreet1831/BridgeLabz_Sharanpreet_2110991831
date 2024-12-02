                                               /// WeakSet 
// only store objects 
// it can not be interated 
let ws = new WeakSet();
var obj1 = { "name" : "Sharan "};
var obj2 = {};
ws.add(obj1);
ws.add(obj2)
console.log(ws.has(obj1))