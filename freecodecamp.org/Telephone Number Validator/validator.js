function telephoneCheck(str) {
    // Define an array of valid regex patterns for U.S. phone numbers.
    const validPatterns = [
      // Format: 555-555-5555
      /^\d{3}-\d{3}-\d{4}$/,
  
      // Format: 1 555-555-5555
      /^1 \d{3}-\d{3}-\d{4}$/,
  
      // Format: 1 (555) 555-5555
      /^1 \(\d{3}\) \d{3}-\d{4}$/,
  
      // Format: 5555555555
      /^\d{10}$/,
  
      // Format: (555)555-5555
      /^\(\d{3}\)\d{3}-\d{4}$/,
  
      // Format: 1 555 555 5555
      /^1 \d{3} \d{3} \d{4}$/,
  
      // Format: 1(555)555-5555
      /1\(\d{3}\)\d{3}-\d{4}/
    ];
  
    // Use the `some` method to check if any of the patterns match the input string.
    return validPatterns.some((pattern) => pattern.test(str));
  }
  