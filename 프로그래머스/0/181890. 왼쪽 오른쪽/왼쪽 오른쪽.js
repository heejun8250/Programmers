function solution(str_list) {
  let answer = [];
  let idx = 0;
  for (let i of str_list) {
    if (i === 'l') {
      answer = str_list.slice(0, idx);
      break;
    } else if (i === 'r') {
      answer = str_list.slice(idx + 1);
      break;
    }
    idx++;
  }
  return answer;
}