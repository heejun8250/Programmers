function solution(n) {
  var sum = 0;

  for (let i in n) {
    sum += parseInt(n[i])
  }

  return sum % 9;
}