function hash_to_pairs(obj){
    let newArr = [];
  
    for (let keys in obj){
      newArr.push([keys, obj[keys]]);
    }
    return newArr;
  }
  
  console.log(hash_to_pairs({"name":"skateboard", "wheels":4, "weight":"7.5 lbs"}))