function double_letter_count(str){
    let word = str.split('');
    let count = 0;
  
    for(let i =0; i<word.length; i++){
      if(word[i]=== word[i+1]){
        count++;
      }
    }
  
    return count;
  }
  
  console.log(double_letter_count('the jeep rolled down the hill'))