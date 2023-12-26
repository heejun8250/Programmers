function solution(arr1, arr2) {
    var answer = 0;
    let sum = (acc, curr) => acc + curr

    if (arr1.length > arr2.length) {
        answer = 1
    } else if (arr1.length === arr2.length) {
        if (arr1.reduce(sum) > arr2.reduce(sum)) {
            answer = 1
        } else if (arr1.reduce(sum) === arr2.reduce(sum)) {
            answer = 0
        } else {
            answer = -1
        }
    } else {
        answer = -1
  }
    return answer;
}