function pick_primes(arr){
    let newArr = [];
  
    for(let i = 0; i<arr.length; i++){
      if(isPrime(arr[i]) === true){
        newArr.push(arr[i]);
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
  
  console.log(pick_primes([101, 20, 103, 2017]));