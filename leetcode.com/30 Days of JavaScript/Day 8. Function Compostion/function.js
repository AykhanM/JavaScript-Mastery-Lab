var compose = function(functions) {
    // Return a new function that takes a single argument 'x'.
    return function(x) {
        // Iterate through the 'functions' array in reverse order.
        for (let i = 1; i <= functions.length; i++) {
            // Call each function in the 'functions' array with 'x' as the argument
            // and update 'x' with the result of each function call.
            x = functions[functions.length - i](x);
        }
        return x;
    }
};

//Example
const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9
