function is_valid_email(str){
  let part= str.split('@');

  if (part.length !== 2){
    return false;
  }
  
  first = part[0];
  second = part[1];

  let left = first.split('');
  alpha = 'abcdefghijklmnopqrstuvxxyz';

  for (let i =0; i<left.length; i++){
    if(!(alpha.includes(left[i]))){
      return false;
    }
  }

  let right = second.split('.');
  if(right.length !==2){
    return false;
  }

  else{
    return true;
  }

}
