function two_d_sum(arr){
    let total =0;
  
    for(let i =0; i<arr.length; i++){
      for(let j= 0; j<arr[i].length; j++){
        total += arr[i][j];
      }
    }
    return total;
  }
  
  array_1 = [
    [4, 5],
    [1, 3, 7, 1]
  ];
  
  array_2 = [
    [3, 3],
    [2],
    [2, 5]
  ]
  console.log(two_d_sum(array_2));
  
  
  console.log(two_d_sum(array_1))