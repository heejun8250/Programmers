function solution(strArr) {
  const a = strArr.map(e => e.length)

  const countOb = {}

  a.forEach((e) => {
    countOb[e] = (countOb[e] || 0) + 1;
  });

  return Math.max(...Object.values(countOb));
}