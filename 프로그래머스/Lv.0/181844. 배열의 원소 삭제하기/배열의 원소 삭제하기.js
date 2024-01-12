function solution(arr, delete_list) {
    for (let i = 0; i < delete_list.length; i++) {
        if (arr.includes(delete_list[i])) {
            arr.splice(arr.indexOf(delete_list[i]), 1)
        }
    }
    return arr
}