function rotate_array(arr, num){
    while(num > 0){
      let ele = arr.pop();
      arr.unshift(ele);
      num--;
    }
  
    return arr;
  
  }
  
  console.log(rotate_array([ "Matt", "Danny", "Mashu", "Matthias" ], 1));
  
  console.log(rotate_array([ "a", "b", "c", "d" ], 2));