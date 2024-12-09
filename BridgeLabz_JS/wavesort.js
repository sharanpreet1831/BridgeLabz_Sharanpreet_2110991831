let arr = [ 10, 90, 49, 2, 1, 5, 23 ];
let n = arr.length;

function sort(arr,n){

    arr.sort((a,b) => a -b );
    for (var i =0 ; i<n ; i+2){
        swap(arr,i,i+1);
    }
}
function swap(arr, x, y)
{
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp
}

console.log(arr);