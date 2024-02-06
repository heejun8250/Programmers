function solution(my_string) {
    var arr = [];
    
    for (let i = 0; i < my_string.length; i++) {
        arr.push(my_string.slice(i))
    }
    var answer = arr.sort()
    return answer;
}