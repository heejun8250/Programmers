function solution(my_string, m, c) {
  const arr = []
  var answer = ''

  for (let i = 0; i < my_string.length; i+=m) {
    arr.push(my_string.substring(i, i+m));
  }
  
  for (let j = 0; j < arr.length; j++) {
    answer += arr[j][c-1]
  }

  return answer;
}