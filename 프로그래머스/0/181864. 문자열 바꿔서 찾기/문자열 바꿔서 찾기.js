function solution(myString, pat) {
    var transStr = myString.replace(/A/gi, 'x').replace(/B/gi, 'A').replace(/x/gi, 'B')
    
    return transStr.includes(pat) ? 1 : 0
}