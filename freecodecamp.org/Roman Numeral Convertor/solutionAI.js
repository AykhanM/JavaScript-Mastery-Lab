function convertToRoman(num) {
    // Define a mapping of Roman numeral values to their corresponding symbols
    const romanNumerals = {
      1000: "M",
      900: "CM",
      500: "D",
      400: "CD",
      100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
      9: "IX",
      5: "V",
      4: "IV",
      1: "I"
    };
  
    // Initialize an empty string to store the resulting Roman numeral
    let result = "";
  
    // Loop through the Roman numeral values in descending order
    for (let value in romanNumerals) {
      // While the given number is greater than or equal to the current value
      while (num >= value) {
        // Append the corresponding Roman numeral symbol to the result
        result += romanNumerals[value];
        // Subtract the value from the given number
        num -= value;
      }
    }
  
    // Return the final Roman numeral representation
    return result;
  }
  
  // Test cases
  console.log(convertToRoman(2));    // II
  console.log(convertToRoman(3));    // III
  console.log(convertToRoman(4));    // IV
  // ... (other test cases)
  console.log(convertToRoman(3999)); // MMMCMXCIX
  