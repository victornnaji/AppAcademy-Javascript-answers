function pyramid_sum(arr){
    let arraylength = arr.length;
    let array = [];
  
    for(let i = 0; i<arraylength; i++){
      array.unshift(arr);
      arr = summing(arr);
    }
  
    return array;
  }
  
  function summing(arr){
    let newArr = [];
  
    for(let i = 0; i<arr.length - 1; i++){
        newArr.push(arr[i] + arr[i+1]);
    }
    return newArr;
  }
  
  console.log(pyramid_sum([3, 7, 2, 11]))