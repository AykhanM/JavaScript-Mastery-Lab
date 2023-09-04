// Define a function called 'map' that takes an array 'arr' and a function 'fn' as arguments.
var map = function(arr, fn) {
    // Create an empty array to store the results of applying 'fn' to each element of 'arr'.
    const returnedArray = [];
    
    // Iterate over each element 'n' in the input 'arr'.
    for (let n of arr){
        // Call the provided function 'fn' with the current element 'n' and its index in 'arr'.
        // Push the result of 'fn' into the 'returnedArray'.
        returnedArray.push(fn(n, arr.indexOf(n)));
    }
    
    // Return the array containing the results.
    return returnedArray;
};
// EXAMPLE 
function plusI(n, i){
    return n + i;
}
const newArray = map([1, 2, 3], plusI);
console.log(newArray);
