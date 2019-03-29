function sumation_sequence(start, len){
    let newArr = Array(len).length;
    let array = [];
    
    for(let i =0; i<newArr; i++){
      array.push(start);
      start = sumy(start);
     }
     return array;
    }
    
    function sumy(num){
      let total =0;
      for(let i = 1; i < num + 1; i++){
        total = total + i ;
      }
      return total;
    }
    
    console.log(sumation_sequence(3,4))