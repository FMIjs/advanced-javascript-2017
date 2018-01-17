let data = [2, 2, 2, 2, 5, 3, 6, 3, 2, 5, 7, 8, 10, 11, 10, 8]
let [res, maxsz] = [[], 0]

for (let fr = 0.5; fr < data.length - 0.5; fr += 0.5) {
  let sz = 0.5
  let [lb, rb] = [Math.floor(fr - sz), Math.ceil(fr + sz)]

  while (sz <= fr && data[lb] === data[rb]) {
    if (sz >= 0.5) {
      console.log(`found from ${fr} and length ${rb + 1 - lb}`, data.slice(lb, rb + 1))
      if (rb + 1 - lb > maxsz) {
        [maxsz, res] = [rb + 1 - lb, data.slice(lb, rb + 1)]
      }
    }

    sz++
    [lb, rb] = [Math.floor(fr - sz), Math.ceil(fr + sz)]
  }
}

console.log(`longest palindrome found is of length ${maxsz}`, res)
