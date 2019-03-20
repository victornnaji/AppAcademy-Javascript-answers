function array_translate(arr){
    //assign an empty string to be later used to store the answer.
    let answer ='';

    //loop through the array and assign the loop to iterate with 2.
    for(let i=0; i<arr.length; i = i+2){

   //let the element be the first array and the number be the second array so when you iterate in twos, the next array would be the 3rd instead of second.
      let ele = arr[i];
      let num = arr[1+i];
  
      // use the Array(number).fill(element) function to fill the element "number" times. 
      answer += (Array(num).fill(ele)).join('');
  
  
    }
    return answer;
  }
  
  console.log(array_translate(["Cat", 2, "Dog", 3, "Mouse", 1])) //CatCatDogDogDogMouse