function element_count(a){
  let result = { };
  
  for(var i = 0; i < a.length; i++) {
    if(!result[a[i]])
        result[a[i]] = 0;
    result[a[i]]++;
}
return result;
}

console.log(element_count(["red", "red", "yellow", "green", "yellow"]))