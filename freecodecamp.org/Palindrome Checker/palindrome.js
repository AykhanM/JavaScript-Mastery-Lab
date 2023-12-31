function palindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase.
    let remove = str.replace(/[^0-9a-z]/gi, '');
    let lower =  remove.toLowerCase();
    let reverse = "";
    // Reverse the string.
    for (var i = lower.length - 1; i >=0; i--){
        reverse += lower[i];
    }
    // Compare the original and reversed strings.
    if (lower == reverse){
        return true;
    } else {
        return false;
    }
}

  // Test cases
  console.log(palindrome("eye"));  // true
  console.log(palindrome("_eye"));  // true
  console.log(palindrome("race car"));  // true
  console.log(palindrome("not a palindrome"));  // false
  console.log(palindrome("A man, a plan, a canal. Panama"));  // true
  console.log(palindrome("never odd or even"));  // true
  console.log(palindrome("nope"));  // false
  console.log(palindrome("almostomla"));  // false
  console.log(palindrome("My age is 0, 0 si ega ym."));  // true
  console.log(palindrome("1 eye for of 1 eye."));  // false
  console.log(palindrome("0_0 (: /-\ :) 0-0"));  // true
  console.log(palindrome("five|\\_/|four"));  // false
