function adjacent_sum(arr){
    let newArr = [];
  
    for(let i = 0; i<arr.length -1; i++){
      newArr.push(arr[i] + arr[i+1]);
      
    }
    return newArr;
  }
  
  console.log(adjacent_sum([0,2, 5, 1, 9, 2, 4]))