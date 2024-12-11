var arr = [1,2,3,4,5];
const myset = new Set(arr);

myset.add(10);
console.log(myset)
console.log(myset.size);
var obj = { name : "Sharan "}
myset.add(obj);
console.log(myset)

myset.forEach((element)=> {
    console.log(element)
})


