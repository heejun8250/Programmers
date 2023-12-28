function solution(arr, k) {
    return answer = k % 2 === 1 ? arr.map(num => num * k) : arr.map(num => num + k);
}