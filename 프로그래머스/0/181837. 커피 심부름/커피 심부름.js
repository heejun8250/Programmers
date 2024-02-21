function solution(order) {
  var a = 0;
    
  order.forEach(e => {
    if (e.includes('americano') || e === 'anything') a += 4500
    else a += 5000
  })

  return a;
}