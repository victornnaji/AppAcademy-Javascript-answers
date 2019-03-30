function anagram(str1, str2){
    str1 = str1.split('');
    let newArr = [];
  
    for(let i = 0; i< str1.length; i++){
      if(str2.includes(str1[i])){
        newArr.push(str1[i]);
      }
    }
  
    if((newArr.join('') === str1.join('')) && (str2.length === str1.length)) {
      return true;
    }
    return false;
  }
  
  console.log(anagram("boot", "bootcamp"));