function solution(n, s, nList) {
  var a = [];

  if (n === 1) {
    a = nList.slice(0, s[1] + 1)
  } else if (n === 2) {
    a = nList.slice(s[0])
  } else if (n === 3) {
    a = nList.slice(s[0], s[1] + 1)
  } else {
    a = nList.slice(s[0], s[1] + 1).filter((_, i) => i % 2 === 0)
  }

  return a;
}