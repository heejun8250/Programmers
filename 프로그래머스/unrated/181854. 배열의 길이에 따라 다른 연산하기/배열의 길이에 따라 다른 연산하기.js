function solution(arr, n) {
    return arr.map((x, index) => {
        if (arr.length % 2 === 1 && index % 2 === 0) {
            return x + n;
        } else if (arr.length % 2 === 0 && index % 2 === 1) {
            return x + n;
        }
        return x;
  });
}