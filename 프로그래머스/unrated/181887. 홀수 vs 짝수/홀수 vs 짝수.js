function solution(num_list) {
    var answer = 0
    var odd = 0
    var even = 0
    num_list.map((x, idx) => idx % 2 === 0 ? odd += x : even += x)

    answer = odd > even ? odd : even
    return answer
}