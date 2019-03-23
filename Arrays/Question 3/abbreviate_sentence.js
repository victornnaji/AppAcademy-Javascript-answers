function abbreviate_sentence(str){
    let abbreviated = str.split(' ').map(x => x.length > 4 ? abrvWord(x): x)
    .join(' ');
  
    return abbreviated;
  }
  
  function abrvWord(word){
    return word.replace(/[aeiou]/gi,'');
  }
  
  console.log(abbreviate_sentence("follow the yellow brick road")); // fllw the yllw brck road
  console.log(abbreviate_sentence("what a wonderful life")); //what a wndrfl life