function memoize(fn) {  // Define memoization function.
    if (fn === "sum"){  // Check if input function is "sum".
        fn = sum = (a, b) => a+b;  // Define sum function.
    }else if (fn === "fanctorial"){  // Check if input function is "factorial".
        fn = factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));  // Define factorial function.
    }else if (fn === "fib"){  // Check if input function is "fib".
        fn = fib = (n) => (n <= 1) ? 1 : fib(n-1) + fib(n-2);  // Define fib function.
    }else {
        throw new Error(`Whoops! There is no "${fn}" function`)  // Throw error for unknown function.
    }
    let cache = {}  // Initialize cache object.
    let callCount = 0;  // Initialize call count.
    return function(...args) {  // Return a function.
       
        if (args.length === 0){  // Check if there are no arguments.
            return callCount;  // Return call count.
        }

        let strArgs = args.toString();  // Convert arguments to string.

        if (strArgs in cache){  // Check if arguments are in cache.
            return cache[strArgs];  // Return cached result.
        }
        
        callCount ++;  // Increment call count.
        cache[strArgs] = fn(...args)  // Cache the result.
        return cache[strArgs];  // Return the result.
    }
};

let sumFunc= memoize("sum");  // Create memoized sum function.
console.log(sumFunc(2,2));  // Call sum function.
console.log(sumFunc(2,2));  // Call sum function.
console.log(sumFunc());  // Get call count.
console.log(sumFunc(1,2));  // Call sum function.
console.log(sumFunc());  // Get call count.
