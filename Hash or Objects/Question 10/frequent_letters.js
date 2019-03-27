function frequent_letters(str){
    let newArr = str.split('');
    let array = []
    let result = {};
  
    
    for(let i =0; i< newArr.length; i++){
      if(!result[newArr[i]]){
        result[newArr[i]] =0;
      }
      result[newArr[i]]++;
    }
  
    for(let keys in result){
      if(result[keys] > 2){
        array.push(keys);
      }
    }
    return array;
  }
  
  console.log(frequent_letters("mississippi"));