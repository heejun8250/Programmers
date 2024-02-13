function solution(myString, pat) {
    var answer = [...myString];
    answer.splice(myString.lastIndexOf(pat) + pat.length)
    return answer.join('');
}