// Convert any datatype to String 
 var num1 = 123
var str = String(num1);
console.log(typeof (str));

// Access Methods

// charAt(index): Returns the character at the specified index.
const str1 = "hello";
console.log(str1.charAt(1));

// charCodeAt(index): Returns the Unicode value of the character at the specified index.
console.log("abc".charCodeAt(1));

//at(index): Returns the character at the specified index (supports negative indices).
console.log("Hello".at(-1));

//includes(substring, startIndex): Checks if a substring exists in a string.
console.log("Hello".includes("ell"));
console.log("Sharan".includes("ara"));

//startsWith(substring, startIndex): Checks if the string starts with a specific substring.
console.log("Sharan".startsWith("Sh"));

//endsWith(substring, length): Checks if the string ends with a specific substring.
console.log("Sharan".endsWith("n"));

//indexOf(substring, startIndex): Returns the index of the first occurrence of a substring.\
console.log("Sharan".indexOf("n"));

//lastIndexOf(substring, startIndex): Returns the index of the last occurrence of a substring.
console.log("Sharan".lastIndexOf("n"));

//length: Returns the length of the string.
console.log("sharanpreet".length);


//==============String Modification

//toUpperCase(): Converts the string to uppercase.
console.log("hello".toUpperCase());

//toLowerCase();
console.log("HELLO WORLD ".toLowerCase());


//trim(): Removes whitespace from both ends of the string.
console.log("hello Sharan from mac . ".trim());
console.log("   hello   ".trimStart());
console.log("   hello   ".trimEnd());

//repeat(count): Repeats the string count times.
console.log("  hiii  ".repeat(3));

//================Substring Methods  


// slice(startIndex, endIndex): Extracts a portion of the string.
console.log("sharanpreet".slice(1,4));

//substr(startIndex, length): Extracts a substring of the specified length (deprecated).
console.log("sharanpreet".substr(1,5));

//replace(searchValue, newValue): Replaces the first match of a substring or regex.
console.log("hello world ".replace("world" , "JS"));

//replaceAll(searchValue, newValue): Replaces all matches of a substring or regex.
console.log(("hello world from mac's world" .replaceAll("world"," js ")));


// ======================= Splitting and Joining
//split(separator, limit): Splits a string into an array.
console.log("sharan preet".split(" "));

//concat(...strings): Concatenates strings (use + or template literals instead).
console.log("hello ".concat(" ","world"));



//===========================9. String to Other Types

//	valueOf(): Returns the primitive value of a string.
let str2 = "hello world "
console.log(str2.valueOf());

//	toString(): Converts a value to a string (often implicitly called).
console.log((1233).toString());


//==========================10. Search and Match

//match(regex): Matches a string against a regular expression.

//matchAll(regex): Returns an iterator for all matches (ES2020+).

//search(regex): Searches for the first match of a regular expression.






