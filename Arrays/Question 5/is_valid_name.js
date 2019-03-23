function is_valid_name(str){
    let arr = str.split(' ');
  
  for (let i =0; i< arr.length; i++){
    if((arr.length >= 2) && (firstword(arr[i]) === true)){
      return true;
    }
   }
  return false;
  }
  

  //create a function to check for each words and test for uppercase
  function firstword(word){
    for(let i =1; i<word.length; i++){
      if(!(word[0] === word[0].toUpperCase() === true &&
      word[i] === word[i].toUpperCase() === false)){
        return false;
      }
    }
    return true;
  }

console.log(is_valid_name("Kush Patel")) // => true
console.log(is_valid_name("Daniel"))  // => false
console.log(is_valid_name("Robert Downey Jr"))// => true
console.log(is_valid_name("ROBERT DOWNEY JR")) // => false
