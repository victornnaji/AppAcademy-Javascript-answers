function all_else_equal(arr){
    for(let i = 0; i<arr.length; i++){
      if((summate(arr)/2) === arr[i]){
        return arr[i];
      }
    }
    return [];
  }
  
  function summate(arr){
    let total = 0;
  
    for (let i = 0; i< arr.length; i++){
      total += arr[i];
    }
    return total;
  }
  
  console.log(all_else_equal([1, 2, 3, 4]))