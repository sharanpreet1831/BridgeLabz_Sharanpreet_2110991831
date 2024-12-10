var arr = [15, 2, 4, 8, 0, 5, 10, 23];
var sum = 23 ;
for (var i =0  ; i< arr.length; i++){
    var currentsum = arr[i] ;
    if (currentsum === sum ){
        console.log(i+1)
    }
    for (var j = i+1 ; j<arr.length; j++){
        currentsum += arr[j];
        
         if (currentsum === sum ){
            console.log(i+1,j+1);
        }
    }
    currentsum = 0 ;
}
