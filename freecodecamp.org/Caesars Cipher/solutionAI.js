function rot13(encodedString) {
    let decodedString = '';

    for (let i = 0; i < encodedString.length; i++) {
        const char = encodedString[i];

        if (/[A-Z]/.test(char)) {
            // Calculate the new position after shifting by 13
            const newCharCode = (char.charCodeAt() - 65 + 13) % 26 + 65;
            decodedString += String.fromCharCode(newCharCode);
        } else if (/[a-z]/.test(char)) {
            // Calculate the new position for lowercase letters
            const newCharCode = (char.charCodeAt() - 97 + 13) % 26 + 97;
            decodedString += String.fromCharCode(newCharCode);
        } else {
            // Keep non-alphabetic characters unchanged
            decodedString += char;
        }
    }

    return decodedString;
}

// Test cases
console.log(rot13("SERR PBQR PNZC"));  // Output should be "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!"));     // Output should be "FREE PIZZA!"
console.log(rot13("SERR YBIR?"));      // Output should be "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));  // Output should be "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."


// More about this solution : https://gist.github.com/Martin-Mok-Tin-Kui/73f8d19393b34794233588840ab8653c