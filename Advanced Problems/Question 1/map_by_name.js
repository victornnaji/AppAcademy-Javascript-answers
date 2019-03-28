function map_by_name(arr){
    let newArr = arr.map(x => x.name);
  
    return newArr;
  }
  
  pets = [
    {"type":"dog", "name":"Rolo"},
    {"type":"cat", "name":"Sunny"},
    {"type":"rat", "name":"Saki"},
    {"type":"dog", "name":"Finn"},
    {"type":"cat", "name":"Buffy"}
  ]
  console.log(map_by_name(pets));
  