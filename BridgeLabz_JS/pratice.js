var arr = [2 , 4, 5 , 6, 91 ,15];
var larmax = 0 ;
for (var i =0 ; i<arr.length ; i++){
    if (larmax < arr[i]){
        larmax = arr[i];
    }
}
var seclar = 0 ;
for (var i = 0 ; i < arr.length ; i++){
    
    if (  seclar < arr[i] && arr[i]<larmax){

        seclar = arr[i];
    }
}
console.log(seclar);