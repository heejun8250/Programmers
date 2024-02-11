function solution(my_string, indices) {
  const strArr = [...my_string];
  var answer = strArr.map((e, idx) => {
    if (!indices.includes(idx)) return e
  }).join('');
  return answer;
}