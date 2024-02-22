function solution(my_string) {
  var ans = Array(52).fill(0);

  for (let i = 0; i < my_string.length; i++) {
    const charCode = my_string.charCodeAt(i)
    
    if (charCode >= 65 && charCode <= 90) ans[charCode - 65] += 1
    else ans[charCode - 71] += 1
  }

  return ans;
}