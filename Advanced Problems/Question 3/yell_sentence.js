function yell_sentence(str){
    let yell = str.split(' ').map(x => x.toUpperCase()+"!" ).join(' ');
  
    return yell;
  }
  
  console.log(yell_sentence("I have a bad feeling about this"))