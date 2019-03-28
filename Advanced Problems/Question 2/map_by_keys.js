function map_by_key(arr, keys){
    let newArr = arr.map(x => x[keys]);
  
    return newArr;
  }
  
  locations = [
    {"city":"New York City", "state":"New York", "coast":"East"},
    {"city":"San Francisco", "state":"California", "coast":"West"},
    {"city":"Portland", "state":"Oregon", "coast":"West"},
  ]
  
  console.log(map_by_key(locations, "state"));
  