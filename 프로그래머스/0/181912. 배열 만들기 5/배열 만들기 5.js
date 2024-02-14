function solution(intStrs, k, s, l) {
    var a = [];
    intStrs.map(e => {if (e.slice(s, s+l) > k) a.push(parseInt(e.slice(s, s+l)))})
    return a;
}