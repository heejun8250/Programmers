function solution(binomial) {
  const splitedBinomial = binomial.split(" ")
  const a = parseInt(splitedBinomial[0])
  const op = splitedBinomial[1]
  const b = parseInt(splitedBinomial[2])
  var answer = 0;

  switch (op) {
    case '+':
      answer = a + b
      break;
    case '-':
      answer = a - b
      break;
    case '*':
      answer = a * b
      break;
    case '/':
      answer = a / b
      break;
  }
  return answer;
}