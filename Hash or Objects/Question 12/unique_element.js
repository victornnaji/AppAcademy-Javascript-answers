function unique_element(arr){
    let result  = {};
  
    for(let i =0; i<arr.length; i++){
      if(!result[arr[i]]){
        result[arr[i]] = 0;
      }
      result[arr[i]]++;
    }
    return Object.keys(result);
  }
  
  console.log(unique_element(['a', 'b', 'a', 'a', 'b', 'c']))