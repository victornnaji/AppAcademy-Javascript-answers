function retrieve_value(obj1, obj2, key){
    let newArr =[];
    for(let val in obj1){
      if (val === key){
        newArr.push(obj1[val])
      }
    }
    for (val2 in obj2){
      if (val2 === key){
        newArr.push(obj2[val2]);
      }
    }
    return newArr;
  }
  
  let dog1 = {"name":"Fido", "color":"brown"};
  let dog2 = {"name":"Spot", "color": "white"};
  
  console.log(retrieve_value(dog1,dog2, 'color'));
  
  