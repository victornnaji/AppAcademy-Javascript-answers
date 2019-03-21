function opposite_count(arr){
    let count = 0;
    for(let i =0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
          if (j > i){
            if(arr[i] + arr[j] === 0){
              count++;
            }
          }
        }
    }
  
    return count;
  }
  
  console.log(opposite_count([ 2, 5, 11, -5, -2, 7 ]));
  console.log(opposite_count([ 21, -23, 24 -12, 23 ]));