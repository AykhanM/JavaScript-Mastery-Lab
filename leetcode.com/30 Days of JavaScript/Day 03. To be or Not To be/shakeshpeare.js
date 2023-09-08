/**
 * @param {string} val
 * @return {Object}
 */
// Define a function called 'expect' that takes a value 'val' as its argument.
var expect = function(val) {
    // Return an object with two methods: 'toBe' and 'notToBe'.
    return {
        // 'toBe' method checks if 'val2' is equal to 'val'.
        toBe: function(val2){
            if(val2===val){
                return true; // If they are equal, return true.
            }
            else{
                throw new Error("Not Equal"); // If not equal, throw an error.
            }
        },
        // 'notToBe' method checks if 'val2' is not equal to 'val'.
        notToBe : function(val2){
            if(val2!==val){
                return true; // If they are not equal, return true.
            }
            else{
                throw new Error("Equal"); // If they are equal, throw an error.
            }
        }
    }
};

/**
 * Usage examples:
 * expect(5).toBe(5); // This should return true because 5 is equal to 5.
 * expect(5).notToBe(5); // This should throw an error because 5 is equal to 5.
 */
