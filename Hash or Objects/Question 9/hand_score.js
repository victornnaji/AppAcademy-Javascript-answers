function hand_score(arr){
    let point = {'A': 4, 'K': 3, 'Q':2, 'J':1};
   
    let score = 0;
    let word = arr.split('');
   
    for(let i = 0; i< word.length; i++){
      for(let keys in point){
        if (word[i].toUpperCase() === keys){
          score += point[keys];
        }
      }
    }
    return score;
   }
   
   console.log(hand_score("QJkAll"))

   