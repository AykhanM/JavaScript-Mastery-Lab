var argumentsLength = function(...args) {
    // Initialize a variable 'length' to 0 to count the number of arguments.
    let length = 0;

    // Use a while loop to iterate through the 'args' array until an undefined argument is encountered.
    while (args[length] !== undefined) {
        length += 1; // Increment 'length' for each defined argument.
    }
    return length;
};
console.log(argumentsLength(1, 2, 3)); // 3
