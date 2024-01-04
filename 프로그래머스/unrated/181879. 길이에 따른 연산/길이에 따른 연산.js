function solution(num_list) {
    var plus = 0;
    var multi = 1
    if (num_list.length >= 11) {
        for (let i = 0; i < num_list.length; i++) {
            plus += num_list[i]
        }
        return plus
    } else {
        for (let i = 0; i < num_list.length; i++) {
            multi *= num_list[i]
        }
        return multi
    }
}