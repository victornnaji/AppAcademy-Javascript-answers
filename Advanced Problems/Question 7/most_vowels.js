function most_vowel(str){
    let word = str.split(' ');
    let max = word[0];
  
    for(let i = 0; i< word.length; i++){
      if(vowel_count(word[i]) > vowel_count(max) === true){
        max = word[i];
      }
    }
    return max;
  }
  
  function vowel_count(word){
    let wrd = word.split('');
    let vowel = ['a','e','i','o','u'];
    let count = 0;
  
    for(let i = 0; i<wrd.length; i++){
      for(let j = 0; j< vowel.length; j++){
        if(wrd[i] === vowel[j]){
          count++;
        }
      }
    }
    return count;
  }
  
  console.log(most_vowel('this is very beautiful amigo'));