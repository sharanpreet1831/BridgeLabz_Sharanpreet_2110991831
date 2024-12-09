// const prompt = require("prompt-sync")();

// const str = prompt("Enter your name:");
// //let reversedStr = "";

// // for (let i = str.length - 1; i >= 0; i--) {
// //   reversedStr += str[i];
// // }
// //console.log(reversedStr); 
// const ans =  str.split("").reverse().join("");
// console.log(ans);

var arr = [1,2,3,4,5,-2,-3,-5]
console.log(Math.max(...arr));
console.log((Math.min(...arr)));
var max= 9099;
var min = 0;
var result = 0 ;
for(var i =0 ; i<arr.length ; i++){
    if (max> arr[i])(
        max = arr[i]
    )
    else if ( min < arr[i]){
        min = arr[i];
    }
    result +=arr[i]

}
var negativearr = [];
var positivearray = []
for (var i = 0 ; i < arr.length ; i++){
    if(arr[i]>0){
        positivearray.push(arr[i]);
    }
    else {
        negativearr.push(arr[i]);
    }
}
console.log(positivearray);
console.log(negativearr);
console.log(result);
console.log(max , min)
arr.sort()
console.log(arr[0]);
console.log(arr[arr.length-1]);

