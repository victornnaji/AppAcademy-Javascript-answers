function ae_count(str){
    let count = {'a':0, 'e': 0};
    let word = str.split('');
  
    for(let i =0; i<word.length; i++){
      if(word[i] === 'a' || word[i] === 'e'){
        count[word[i]] += 1;
      }
    }
    return count;
  }
  
  
  console.log(ae_count('everybody hates me'));