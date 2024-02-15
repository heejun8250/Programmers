function solution(arr) {
      const len = arr.length

      if (!Number.isInteger(Math.log2(len))) {
        let a = Math.pow(2, Math.ceil(Math.log2(len)));
        let b = a - len

        for (let i = 0; i < b; i++){
          arr.push(0)
        }
        return arr
      }
    
    return arr
}