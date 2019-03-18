function first_in_array(arr, elem1, elem2){
    if(arr.indexOf(elem1) < arr.indexOf(elem2)){
      return elem1;
    }
  return elem2;
}

console.log(first_in_array(["a", "b", "c", "d"], "d", "b")); // => "b"
console.log(first_in_array(["cat", "bird" ,"dog", "mouse" ], "mouse", "dog")); //=> "dog"