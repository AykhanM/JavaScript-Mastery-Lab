var once = function(fn) {
    // Initialize a flag 'called' to keep track of whether 'fn' has been called before.
    let called = false;
    
    // Return a new function that can be called with any number of arguments.
    return function(...args){
        // Check if 'fn' has not been called before.
        if (called === false){
            // Set the flag 'called' to true to indicate that 'fn' has been called.
            called = true;
            return fn(...args);
        }
    }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
console.log(onceFn(1,2,3)); // Output: 6
console.log(onceFn(2,3,6)); // Output: undefined
