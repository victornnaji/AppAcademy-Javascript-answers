function ceaser_cipher(str, num){
    let word = str.split('');
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newstr = '';
  
    for(let i = 0; i<word.length; i++){
      let old_idx = alphabet.indexOf(word[i]);
      let new_idx = old_idx + num;
      let new_word = alphabet[new_idx % 26];
      newstr += new_word;
    }
    return newstr
  }
  
  console.log(ceaser_cipher('zebra', 4))
  
  