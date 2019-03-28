function whisper_word(str){
    let whisper = str.map(x => x.toLowerCase()+"..." );
  
    return whisper;
  }
  
  console.log(whisper_word(["KEEP", "The", "NOISE", "down"]))