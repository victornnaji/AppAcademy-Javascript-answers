function select_upcase_keys(obj){
    let result ={};
    let newArr = [];
  
    for (let keys in obj){
      if (keys === keys.toUpperCase()){
       newArr.push([keys, obj[keys]]);
      }
    }
    return Object.assign(...newArr.map(d => ({[d[0]] : d[1]})))
  }
  
  
  console.log(select_upcase_keys({"MAKE": 'tesla', "MODEL": "S", "Year":2018, "SEATS": 4}))