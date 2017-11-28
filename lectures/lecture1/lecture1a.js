
var arr = [1, 2, 3, 4]
var c = arr.splice(0, 2)

var proto = {
  x: 10,
  printme: function () {
    console.log(Object.keys(this))
  }
}

var obj = Object.create(proto, {
  a: { value: 10, enumerable: true },
  b: { value: 20, enumerable: true }
})

obj.c = function () {
  console.log("this from c's perspective")
  console.log(Object.keys(this))
}

obj.c()
obj.printme()
