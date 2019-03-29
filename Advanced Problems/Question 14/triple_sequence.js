function triple_sequence(num, len){
    let newArr = Array(len);
    let array = [];
  
    for(let i =0; i < newArr.length; i++){
      array.push(num);
      num *= 3;
    }
  
    return array;
  }
  
  
  
  console.log(triple_sequence(4, 5));