function solution(arr) {
  const fI = arr.indexOf(2);
  const lI = arr.lastIndexOf(2);

  var answer = arr.slice(fI, lI+1)
  
  return answer.length == 0 ? [-1] : answer;
}