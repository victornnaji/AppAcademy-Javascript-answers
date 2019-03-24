function ae_count(str){
    let words = str.split('');
    let obj = [];
    let a = 0;
    let e =0;
    for(let i =0; i<words.length; i++){
      if(words[i] === 'a'){
        a++;
      }
      if(words[i] === 'e'){
       e++;
      }
    }
    obj.push(['a', a++]);
    obj.push(['e', e++]);
    return Object.assign(...obj.map(x => ({[x[0]]:x[1]})));
  }
  
  
  console.log(ae_count('everybody hates me'));
  