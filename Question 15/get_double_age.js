function get_double_age(obj){
    const {age: answer}= obj;
     return answer*2;
  }
  
  console.log(get_double_age({"name":"App Academy", "age":5}))
  console.log(get_double_age({"name":"Ruby", "age":23}));