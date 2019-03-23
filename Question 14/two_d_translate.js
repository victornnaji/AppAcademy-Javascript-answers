function two_d_translate(arr){
  return arr.reduce((result, [ele, num]) =>
    result.concat(Array(num).fill(ele)),
  []);
}

arr_1 = [
  ['boot', 3],
  ['camp', 2],
  ['program', 0]
]

console.log(two_d_translate(arr_1));
