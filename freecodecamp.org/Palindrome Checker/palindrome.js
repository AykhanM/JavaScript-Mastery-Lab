function palindrome(str) {
    let remove = str.replace(/[^0-9a-z]/gi, '');
    let lower =  remove.toLowerCase();
    let reverse = "";
    for (var i = lower.length - 1; i >=0; i--){
        reverse += lower[i];
    }
    if (lower == reverse){
        console.log("Palindrome")
        return true
    }else {
        console.log("Not Palindrome")
        return false
    }
  }

palindrome("A man, a plan, a canal. Panama");