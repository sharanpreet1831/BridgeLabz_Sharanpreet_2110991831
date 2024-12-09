var arr = [1, 1, 2, 2, 2, 2, 3];
var target = 2 ;
var count = 0 ;
for (var i =0 ; i<arr.length ; i++){
    if (target == arr[i]){
        count++
    }
}
console.log(count);