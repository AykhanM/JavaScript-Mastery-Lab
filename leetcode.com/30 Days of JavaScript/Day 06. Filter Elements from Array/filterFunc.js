// Define a function called 'filter' that takes an array 'arr' and a filtering function 'fn'
var filter = function(arr, fn) {
    // Create an empty array to store the filtered elements
    const returnedArray = [];
    // Initialize an index variable to keep track of the current index in the array
    let index = 0;
    // Iterate through each element 'n' in the input array 'arr'
    for (let n of arr){
        // Call the filtering function 'fn' with the current element 'n' and its index
        // If the filtering function returns true, add the element 'n' to 'returnedArray'
        if (fn(n, index)){
            returnedArray.push(n);
        }
        // Increment the index variable for the next iteration
        index ++;
    }
    return returnedArray;
};

// EXAMPLE 
function graterThan10(n){
    return n > 10;
}
const newArray = filter([0, 10, 20, 30], graterThan10);
console.log(newArray);
