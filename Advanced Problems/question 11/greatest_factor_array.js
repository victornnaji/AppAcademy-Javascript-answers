function greatest_factor(arr){
    let gFactor = arr.map(x => (x % 2 ===0)?factor(x): x);
    return gFactor;
  }
  
  function factor(num){
    let max = 0;
    for(let i = num -1; i > 0; i--){
      if(num % i === 0){
        if(i > max){
          max = i;
        }
      }
    }
    return max;
  }
  
  console.log(greatest_factor([16, 7, 9, 14]));