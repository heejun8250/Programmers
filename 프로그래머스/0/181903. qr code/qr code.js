function solution(q, r, code) {
  var ans = '';

  for (let i = 0; i < code.length; i++) {
    if (i % q === r) ans += code[i]
  }

  return ans;
}