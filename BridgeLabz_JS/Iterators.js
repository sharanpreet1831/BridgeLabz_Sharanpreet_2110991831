var x = [100 , 200 , 300 ];

let y = x[Symbol.iterator]();
  
                                 ///Build in function 
// console.log(y.next().value);
// y.next();
// console.log(y.next());
// console.log(y.next());


                                  /// loop in iterator 
// let result = y.next();

// while (!result.done){
//     console.log(result.value);
//     result = y.next();

// }


                                 /// creating the iterator 
function numberIterator( arr ){
    var nextNum = 0 ;
    return {
        next() {
            if (nextNum < arr.length){
                return {
                    value : arr[nextNum++],
                    done : false 
                }
            }
            else {
                return {
                    value : arr[nextNum++],
                    done : false 
                }
            }
        }
    }
}


var result = numberIterator(x);

console.log(result.next().value);

