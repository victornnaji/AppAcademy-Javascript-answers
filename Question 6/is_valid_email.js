function is_valid_email(str){
    if (isCapital(str) && checkNumPos(str) && checkForDot(str)){
      return true;
    }
    return false;
  }
  
  //check if word contains a capital letter, returns true if it does not contain capital letter.
  // capital letter check ends at the index the @ starts. 
  function isCapital(word){
    let divide = word.indexOf('@');
    for (let i=0; i< divide; i++){
      if(word[i] === word[i].toUpperCase()){
        return false;
      }
      
    }
    return true;
  }


  //check if numbers appears before or after the @ symbol. return true if numbers appear after the @ and false if it appears before the @ symbol. 
  function checkNumPos(word){
    let regex = [0,1,2,3,4,5,6,7,8,9];
    for(let i =0; i<regex.length; i++){
    if(checkForNum(word) || word.indexOf('@') < word.indexOf(regex[i])){
      return true;
    }
  }
  
    return false;
  }
  
  //check if the word contains a number. Return false if word includes a number and false if word does not include a number.
  function checkForNum(word){
    let regex = [0,1,2,3,4,5,6,7,8,9];
    for(let i =0; i< regex.length; i++){
    if(word.includes(regex[i])){
      return false;
    }
   }
  
    return true;
  }
  
  //check whether the @ appears at least once. 
  function isAtpresent(word){
    if (word.includes('@')){
      return true;
    }
    return false;
  }
  
  //check for the position of the dot. true if it appears after the @ and appears once and false if it appears more than once and or before the @.
  function checkForDot(word){
      if((lastindex(word,".") === true && lastindex(word,"@") === true) && ((word.indexOf('.') > word.indexOf('@')))){
        return true;
      }
      return false;
    }
  

  //check whether the @ appears more than 1 time. Return true if @ appear one time and false if it appears more than once.
  function lastindex(string, x){
    for (let i =0; i< string.length; i++){
      if (string.lastIndexOf(x) === string.indexOf(x)){
        return true;
      }
    }
    return false;
  }