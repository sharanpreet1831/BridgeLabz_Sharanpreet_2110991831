const numbers = [42, 7, 89, 16, 3, 58, 23, 74,7 , 89 , 16];
var clearSet = new Set ();
var DuplicateElement = new Set();
for (var i =0 ;i<numbers.length ; i++){
    if (clearSet.has(numbers[i])){
        DuplicateElement.add(numbers[i]);
    }
    else{
        clearSet.add(numbers[i]);
    }
    
} 
console.log(clearSet);
console.log(DuplicateElement);