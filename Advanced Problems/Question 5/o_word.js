function o_words(str){
    let word = str.split(' ');
    let newArr = [];
  
    for(let i =0; i< word.length; i++){
      if(word[i].includes('o')){
        newArr.push(word[i]);
      }
    }
  
    return newArr;
  }
  
  console.log(o_words("How are you doing"))