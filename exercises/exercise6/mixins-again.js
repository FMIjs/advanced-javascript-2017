// this is just another class. we want to 
// mix something into it
class Testov {
  constructor () {
    console.log('construct an object')
    this.somevar = 42
  }
}

// now we use ES5 syntax here to get
// an enumerable property
// as all ES6 class definitions are
// non-enumerable by default and
// would not work with Object.assign
var Doing = function () { }

Doing.prototype.method = function () {
  console.log(`i knoo hau 2 use [${this.somevar}]`)
}

// no instancing from the mixin directly
let d = new Doing()
d.method()

let t = new Testov()

try {
  t.method()
} catch (e) {
  console.warn('okay, were now totally convinced')
}

//  quick way to mixin the entire class
//  back in ES5 we used to do it with forloop
Object.assign(Testov.prototype, Doing.prototype)

// now t has this method()
t.method()

// now this new t2 guy will have  it also, as we
// mixed in the Doing's proto, thus all its members 
let t2 = new Testov()
t2.method()
