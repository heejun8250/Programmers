function solution(myString) {
    return myString.split("").map((e) => e < 'l' ? e.replaceAll(e, 'l') : e).join("");
}