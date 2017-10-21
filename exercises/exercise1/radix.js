function radix(arr) {
  let change = false;
  let mask = 1
  let res = new Array(arr.length)

  do {
      mask = mask * 10
      const bucket = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      const res = new Array(arr.length)
      change = false
      
      // counting
      arr.forEach(el => {
          if ((mask / 10) < el) {
              let d = Math.floor((el % mask) / (mask/10))
              bucket[d]++
              change = true
          } else {
              bucket[0]++
          }
      })

      if (change === false) break

      // prepare indices
      bucket.forEach((e, i) => i ? bucket[i] = bucket[i-1] + bucket[i] : bucket[i])

      // reorder
      arr.reverse().forEach(el => {
          let d = ((mask / 10) < el) ?  Math.floor(el % mask / ( mask / 10 )) : 0
          bucket[d]--
          res[bucket[d]] = el
      })

      // assert length is correct !
      if (arr.length !== res.length) 
          throw "bucket length differs from res length"

      arr = res   // this is not a deep copy, but a reference assignment!
      // console.log(arr)
  } while (change)

  return arr
}

console.log(
radix(
  [412, 64, 331, 56, 83, 101, 11, 2]))

console.log("done")
//  0 1 2 3 4 5 6 7 8 9  << i
//    3 2   1   1        << bucket[i]

//  0 3 5