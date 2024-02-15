function solution(myString, pat) {
  var sliceStr = []

  for (let i = 0; i < myString.length; i++) {
    sliceStr.push(myString.slice(i, pat.length + i))
  }

  var answer = sliceStr.filter(e => e === pat).length;
  return answer;
}