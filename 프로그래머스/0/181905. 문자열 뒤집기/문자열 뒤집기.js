function solution(my_string, s, e) {
    const sliceStr = my_string.slice(s, e + 1);
    const reverseStr = [...my_string].slice(s, e + 1).reverse().join('');
    return my_string.replace(sliceStr, reverseStr);
}