function solution(names) {
    var answer = [];
    
    names.map((e, idx) => {
        if (idx % 5 === 0) {
            answer.push(e)
        }
    })
    
    return answer;
}