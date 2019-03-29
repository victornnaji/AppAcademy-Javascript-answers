function prime_factors(num){
    let newArr = [];
    for(let i = 2; i < num; i++){
      if(num % i === 0){
        if(isPrime(i) === true){
          newArr.push(i);
        }
      }
    }
    return newArr;
  }
  
  function isPrime(num){
    if (num <= 1){
      return false;
    }
  
    for(i = 2; i< num; i++){
      if(num % i === 0){
        return false;
      }
    }
    return true;
  }
  
  console.log(prime_factors(141));