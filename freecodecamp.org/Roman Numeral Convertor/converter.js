function convertToRoman(num) {
    // Initialize an empty string to store the resulting Roman numeral
    let string = "";
    
    // Loop while the given number is greater than 0
    while (num > 0){
        // Convert thousands (M)
        while(num >= 1000){
            num -= 1000;
            string += "M";
        }
        
        // Convert nine hundreds (CM)
        while (num >= 900 && num <= 999){
            num -= 900;
            string += "CM";
        }
        
        // Convert five hundreds (D)
        while(num >= 500){
            num -= 500;
            string += "D";
        }
        
        // Convert four hundreds (CD)
        while (num >= 400 && num <= 499){
            num -= 400;
            string += "CD";
        }
        
        // Convert hundreds (C)
        while(num >= 100){
            num -= 100;
            string += "C";
        }
        
        // Convert nineties (XC)
        while (num >= 90 && num <= 99){
            num -= 90;
            string += "XC";
        }
        
        // Convert fifties (L)
        while(num >= 50){
            num -= 50;
            string += "L";
        }
        
        // Convert forties (XL)
        while (num >= 40 && num <= 49){
            num -= 40;
            string += "XL";
        }
        
        // Convert tens (X)
        while(num >= 10){
            num -= 10;
            string += "X";
        }
        
        // Convert nines (IX)
        while (num >= 9){
            num -= 9;
            string += "IX";
        }
        
        // Convert fives (V)
        while (num >= 5){
            num -= 5;
            string += "V";
        }
        
        // Convert fours (IV)
        while (num >= 4){
            num -= 4;
            string += "IV";
        }
        
        // Convert ones (I)
        while (num >= 1){
            num -= 1;
            string += "I";
        }
    }
    // Return the final Roman numeral representation
    return string;
}

// Test cases
console.log(convertToRoman(2));    // II
console.log(convertToRoman(3));    // III
console.log(convertToRoman(4));    // IV
// ... (other test cases)
console.log(convertToRoman(3999)); // MMMCMXCIX
