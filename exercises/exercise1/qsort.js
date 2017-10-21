var qsort = function(arr) {
  let partition = function(lidx, ridx) {
      let pval = arr[lidx]    // note: ! may be chosen differently

      let l = lidx - 1
      let r = ridx + 1

      //   >>>>>>> move L towards end 
      // [ lesser, lesser, L, ?, ?, ?, ... (piv) ... , ?, ?, ?, R, greater, greater ]
      //                                               <<<<<<< move R to start
      //  while maintaining (L < piv < R) true. this goes for only that long...  
      //  then swap L & R and try some more until L & R eventually meet into P
      //
      //  P is now the pivot position and all elems of the range hold Ai < pval < Aj 

      do {
          do {                // move L towards end 
              l = l + 1
          } while (arr[l] < pval)

          do  {               // move R towards 
              r = r - 1
          } while (arr[r] > pval)

          if (l >= r) {
              return r
          }

          [arr[l], arr[r]] = [arr[r], arr[l]] // a.k.a. swap
      } while (42)
  }

  let rec = function (lidx, ridx) {
      if (lidx < ridx) {
          let pidx = partition(lidx, ridx)
          let lsort = rec(lidx, pidx)
          let rsort = rec(pidx + 1, ridx)
      }
  }

  rec(0, arr.length - 1)

  return arr
}

console.log(
qsort(
  [1, 2, 5, 11, 8, 6, 3]))