function pig_latin_word(str){
    let strArr = [];
    let tempChar;
    
    function isConsonant(char){
        return !/[aeiou]/.test(char);
    }
    
    if(!isConsonant(str.charAt(0)))
        return str + 'Way';
    else
      strArr = str.split('');

      while(isConsonant(strArr[0])){
        tempChar = strArr.shift();
        strArr.push(tempChar);
      }
      return strArr.join('') + 'Ay'
  }
  
  console.log(pig_latin_word("cyeat"))
