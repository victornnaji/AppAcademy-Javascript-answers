function perfect_square(num){
    for(let i = 1; i< num ; i++){
      if((num % i === 0) && (num / i === i)){
        return true;
      }
    }
    return false;
  }
  
  console.log(perfect_square(35));
  
  