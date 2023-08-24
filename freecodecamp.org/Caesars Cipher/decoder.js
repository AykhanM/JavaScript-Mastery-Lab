const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
function rot13(str) {
  let decoded = [];
  for (var i = 0; i < str.length; i++){
    if (alphabet.includes(str[i])){
        let index = alphabet.indexOf(str[i]);
        if (index <=12){
            let letter = index + 13;
            decoded.push(alphabet[letter]);
        }else{
            let secondRound = 13 - (26 - index);
            decoded.push(alphabet[secondRound]);
        }

    }else{
        decoded.push(str[i]);
    }
  }
  let decodedStr = decoded.join("").toString()
  console.log(decodedStr)
  return(decodedStr)
}


rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");



