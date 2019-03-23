function get_full_name(obj){
    return  `${obj.first} ${obj.last}, The ${obj.title}`;
  }
  
  let hash = {"first":"Michael", "last":"Jordan", "title": "GOAT"}
  
  console.log(get_full_name(hash))