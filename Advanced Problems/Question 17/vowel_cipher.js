function vowel_cipher(str){
    let vowel = 'aeiou';
    let newWord = str.split('').map(x => (vowel.includes(x))?moveVowel(x): x).join('');
  
    return newWord;
  }
  
  
  function moveVowel(word){
    let vowel = 'aeiou';
    let str = ''; 
  
    for(let j = 0; j< vowel.length; j++){
        if(word === vowel[j]){
          let old_idx = vowel.indexOf(word);
          let new_idx = old_idx + 1;
          let new_word = vowel[new_idx % 5];
          str = new_word;
        }
    }
    return str;
  }
  
  
  console.log(vowel_cipher('paper cup'))