
class Testov {
  constructor () {
    console.log('construct an object')
    this.somevar = 42
  }
}

let Doing = function() {

}

Doing.prototype = {
  method: function() {
    console.log(`i know ho to use ${this.somevar}`)
  }
}

let t = new Testov()

Object.assign(Testov.prototype, Doing.prototype)
t.method()

let t2 = new Testov()
t2.method()