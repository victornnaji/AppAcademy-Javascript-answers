function word_length(str){
    let words = str.split(' ');
    let newArr = [];
    
    for(let i = 0; i< words.length; i++){
      newArr.push([words[i], words[i].length]);
    }
    return Object.assign(...newArr.map(d => ({[d[0]]: d[1]})));
  }
  
  console.log(word_length('this is so fun'));