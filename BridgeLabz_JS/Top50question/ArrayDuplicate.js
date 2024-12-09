 let arr = [1,2,4,5,6,7,7,7,8,8,8];
 let cleanSet = new Set();
    let duplicate = new Set();
 for (var i =0 ; i<arr.length ; i++){
    
    if(cleanSet.has(arr[i])){
        duplicate.add(arr[i]);
    }
    else {
        cleanSet.add(arr[i]);
    }
 }
 console.log(cleanSet);
 console.log(duplicate);