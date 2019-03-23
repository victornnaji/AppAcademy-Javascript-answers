function two_d_translate(arr){
    let newArr= '';
    let array =[];
  
    for(let i =0; i< arr.length; i++){
      for(let j=0; j< arr[i].length; j = j+2){
        let ele = arr[i][j];
        let num = arr[i][j+1];
  
        if (num === 0){
          continue;
        }
        array[i] = Array(num).fill(ele);
      }
      
    }
    newArr = array.toString().split(',');
    return newArr;
  }
  
  arr_1 = [
    ['boot', 3],
    ['camp', 2],
    ['program', 0]
  ]
  
  console.log(two_d_translate(arr_1));