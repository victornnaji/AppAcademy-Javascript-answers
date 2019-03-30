function consonant_cancel(str){
    let word = str.split(' ').map(x => cancel(x)).join(' ');
  
    return word;
  }
  
  function cancel(word){
    let vowel = 'aeiou';
    let wrdd = word.split('');
    let new_word = '';
  
    for(let i = 0; i<wrdd.length; i++){
      if(vowel.includes(wrdd[i])){
        return new_word = word.slice(word.indexOf(wrdd[i]));
      }
    }
  }
  
  console.log(consonant_cancel("dawn the rabbit hole"));
  
  