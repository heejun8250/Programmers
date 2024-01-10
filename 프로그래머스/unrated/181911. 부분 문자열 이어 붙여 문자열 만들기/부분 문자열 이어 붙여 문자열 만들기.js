function solution(my_strings, parts) {
    const sliceArr = [];
    
    for (let i = 0; i < my_strings.length; i++) {
        sliceArr.push(my_strings[i].slice(parts[i][0], parts[i][1]+1))
    }
    
    return answer = sliceArr.join('');
}