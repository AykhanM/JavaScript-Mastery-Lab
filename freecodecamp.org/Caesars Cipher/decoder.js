// Define the alphabet for reference
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
                  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Function to decode a string using ROT13
function rot13(str) {
  let decoded = [];

  for (var i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i])) {
      // If the character is in the alphabet, process it
      let index = alphabet.indexOf(str[i]);

      if (index <= 12) {
        // If the index is less than or equal to 12, perform a simple shift
        let letter = index + 13;
        decoded.push(alphabet[letter]);
      } else {
        // If the index is greater than 12, handle wraparound
        let secondRound = 13 - (26 - index);
        decoded.push(alphabet[secondRound]);
      }
    } else {
      // If the character is not in the alphabet, keep it unchanged
      decoded.push(str[i]);
    }
  }

  // Join the decoded array into a string and return
  let decodedStr = decoded.join("").toString();
  return decodedStr;
}

// Test cases
console.log(rot13("SERR PBQR PNZC"));  // Output should be "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!"));     // Output should be "FREE PIZZA!"
console.log(rot13("SERR YBIR?"));      // Output should be "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));  // Output should be "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
