function pig_latin_word(str){

    let strArr = '';
    let vowel = 'aeiou'.split('');
    if (vowel.includes(str[0])){
      return str + 'yay'
    }
  
    let vowelPos = check(str, vowel);
  
     strArr = str.split('');
    while (vowelPos > 0){
      let ele = strArr.shift();
      strArr.push(ele);
  
      vowelPos--;
    }
  
    let answer = strArr.join('');
    return answer + 'ay';
  
    
  }
  
  function check(str,vowel){
    for(let i =0; i< vowel.length; i++){
      let firstVowel = str.indexOf(vowel[i]);
      return firstVowel;
    }
  }
  
  console.log(pig_latin_word("eat"))