function combinations(arr){
    let newArr = [];
  
  
    for(let i =0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
          if (j > i){
            newArr.push([arr[i], arr[j]]);
          }
        }
    }
  
    return newArr;
    
  }
  
  console.log(combinations(["a", "b", "c"]))