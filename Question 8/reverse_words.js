function reverse_words(string){
    return string.split("").reverse().join("").split(" ").reverse().join(" "); 
  }
  
  console.log(reverse_words('simplicity is prerequisite for reliability')); //yticilpmis si etisiuqererp rof ytilibailer
  
  console.log(reverse_words('keep coding')); //peek gnidoc