function solution(myStr) {
  var answer = myStr.split(/a|b|c/).filter(e => e != "");

  if (answer.length === 0) answer.push('EMPTY')

  return answer;
}