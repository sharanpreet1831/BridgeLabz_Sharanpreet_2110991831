var arr = [
    [0, 0, 1, 1],
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 0, 0]
]
var maxcount = 0 ;
var index =0 ;
for ( var i = 0 ; i<arr.length ; i++){
    currentsum=0;
    for (var j =0  ; j<arr[0].length ; j++){
        if(arr[i][j]==1){
            currentsum ++;
        }
    }
    if (currentsum > maxcount){
        maxcount = currentsum;
        index = i;
    }
}
console.log(maxcount, index);
