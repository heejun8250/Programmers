function solution(myString) {
    return myString.split("").map((e) => e === "a" || e === "A" ? e.toUpperCase() : e.toLowerCase()).join("");
}