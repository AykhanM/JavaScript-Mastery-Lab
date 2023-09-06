// Define a 'reduce' function that takes an array 'nums', a function 'fn', and an initial value 'init'.
var reduce = function(nums, fn, init){
    // Check if the 'nums' array is empty. If it is, return the initial value 'init' directly.
    if (nums.length == 0){
        return init;
    }

    // Iterate through the 'nums' array using a 'for...of' loop.
    for (let n of nums){
        // Apply the 'fn' function to the current 'init' value and the current element 'n', then update 'init' with the result.
        init = fn(init, n);
    }
    return init;
};

// Example 1: Calculate the sum of elements in the array [1, 2, 3, 4].
console.log(
    reduce([1, 2, 3, 4],
    function sum(accum, curr){ return accum + curr; },
    0
)); // Expected Answer: 10

// Example 2: Calculate the sum of squares of elements in the array [1, 2, 3, 4].
console.log(
    reduce([1, 2, 3, 4],
    function sum(accum, curr) { return accum + curr * curr; },
    100
)); // Expected Answer: 130

// Example 3: Calculate a default value when the input array is empty.
console.log(
    reduce([], function sum(accum, curr) { return 0; }, 25)
); // Expected Answer: 25
